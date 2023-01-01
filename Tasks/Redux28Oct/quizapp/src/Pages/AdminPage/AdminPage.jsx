import { Box, Button, TextField, Typography } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import { getAdminQuestionAction } from "../../REDUX/Actions/Action";
import "./AdminPage.css";
class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      que: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      ans: "",
    };
  }
  handleSubmit() {
    this.props.getAdminQuestionAction({
        que:this.state.que,
        option1:this.state.option1,
        option2:this.state.option2,
        option3:this.state.option3,
        option4:this.state.option4,
        ans:this.state.ans,
    });
    this.setState({
      que: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      ans: "",
    })
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Box className="adminPage">
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            Admin Page
          </Typography>
          <Box className="adminPageContainer">
            <TextField
              type="text"
              variant="outlined"
              label="Question"
              className="textfield"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ que: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Option 1"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ option1: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Option 2"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ option2: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Option 3"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ option3: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Option 4"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ option4: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Answer"
              sx={{ margin: "8px" }}
              onChange={(e) => this.setState({ ans: e.target.value })}
            />
            <Button onClick={() => this.handleSubmit()}>Submit</Button>
          </Box>
        </Box>
      </>
    );
  }
}
const mapStateToProps = (State) => ({
  State: State,
});

const mapDispatchToProps = {
  getAdminQuestionAction: getAdminQuestionAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
