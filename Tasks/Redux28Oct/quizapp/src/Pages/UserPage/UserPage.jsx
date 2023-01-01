import { Backdrop, Box, Button, CircularProgress, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import { getQuestionAction, setAnsAction } from "../../REDUX/Actions/Action";
import "./UserPage.css";
class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      ans: "",
      id: "",
      queNumber: 0,
      isClicked: false,
      score: 0,
      open:false
    };
  }
  handleNext() {
    const cq =
      this.props.State.QuizReducer.quizQuestions.questions[
        this.state.queNumber
      ];

    this.props.setAnsAction({
      ans: this.state.ans,
      id: this.state.id,
      correct: this.state.ans === cq.ans,
    });
    this.setState({ queNumber: this.state.queNumber + 1, isClicked: false });
  }
  componentDidMount() {
    this.props.getQuestionAction();
  }

  getScore = () => {
    let temp = 0;
    // console.log('----------------', this.props.State.QuizReducer.answers)
    this.props.State.QuizReducer.answers.map((item, index) => {
      // console.log(item.ans !=undefined?item.ans:"not answered")
      // console.log('-----------------------', index, item.answers.correct)s
      if (item.correct) {
        temp += 1;
      }
    });
    this.setState({ score: temp });
  };

  render() {
    let questions = this.props.State.QuizReducer.quizQuestions.questions;

    console.log(this.props.State.QuizReducer.answers);
    return (
      <>
        <Box className="userPage">
          <Typography variant="h3" className="title">
            Questions
          </Typography>
          <Box className="userPageMainBox">
            <Box className="numberOfQue">
              {questions ? (
                questions.map((item, i) => {
                  return (
                    <Box
                      className="number"
                      onClick={() =>
                        this.setState({ queNumber: questions.indexOf(item) })
                      }
                      key={i}
                    >
                      {questions.indexOf(item) + 1}
                    </Box>
                  );
                })
              ) : (
                <Box className="number">1</Box>
              )}
            </Box>
            {questions
              ? questions.map((item, i) => {
                  return (
                    <>
                      {this.state.queNumber === questions.indexOf(item) ? (
                        <Box key={i}>
                          <Box className="question">
                            {item.que} ?{/* {item.id} */}
                          </Box>
                          <Box className="optionsBox">
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                margin: "5px 0",
                              }}
                            >
                              <Box
                                className="option"
                                // sx={{borderColor:`${this.state.isClicked}` ? "yellow":"red"}}
                                onClick={() =>
                                  this.setState({
                                    ans: item.option1,
                                    isClicked: true,
                                    id: item.id,
                                  })
                                }
                              >
                                {item.option1}
                              </Box>
                              <Box
                                className="option"
                                onClick={() =>
                                  this.setState({
                                    ans: item.option2,
                                    isClicked: true,
                                    id: item.id,
                                  })
                                }
                              >
                                {item.option2}
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                margin: "5px 0",
                              }}
                            >
                              <Box
                                className="option"
                                onClick={() =>
                                  this.setState({
                                    ans: item.option3,
                                    isClicked: true,
                                    id: item.id,
                                  })
                                }
                              >
                                {item.option3}
                              </Box>
                              <Box
                                className="option"
                                onClick={() =>
                                  this.setState({
                                    ans: item.option4,
                                    isClicked: true,
                                    id: item.id,
                                  })
                                }
                              >
                                {item.option4}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ) : null}
                    </>
                  );
                })
              : <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={this.state.open}
              onClick={()=>this.setState({open:false})}
            >
              <CircularProgress color="inherit" />
            </Backdrop>}
            <Box className="buttons">
              <Button
                onClick={() =>
                  this.setState({ queNumber: this.state.queNumber - 1 })
                }
                disabled={this.state.queNumber === 0}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={() => this.handleNext()}
                disabled={!this.state.isClicked}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        {questions ? (
          questions.length === this.state.queNumber ? (
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"15px"}}>
              <Button onClick={() => this.getScore()} color="success" variant="outlined">Submit</Button>
              <Typography sx={{margin:"5px"}}>
                Result:{this.state.score}/{questions.length}
              </Typography>
            </Box>
          ) : null
        ) : null}
      </>
    );
  }
}
const mapStateToProps = (State) => ({
  State: State,
});
const mapDispatchToProps = {
  getQuestionAction: getQuestionAction,
  setAnsAction: setAnsAction,
  // return {
  //     getQuestionAction:(d) => dispatch(getQuestionAction(d))

  // }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
