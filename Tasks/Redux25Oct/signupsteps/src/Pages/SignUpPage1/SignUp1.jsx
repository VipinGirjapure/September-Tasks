import { Avatar, Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import { firstPage, secondPage, thirdPage } from "../../Redux/Actions/Action";
import "./SignUp.css";
class SignUp1 extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userName: "",
      firstName: "",
      lastName: "",
      currentCompany: "",
      totalExperience: "",
      designation: "",
      page: 1,
    };
  }
  handleNext() {
    if (this.state.page === 1) {
      this.props.firstPage({
        email: this.state.email,
        password: this.state.password,
      });
    } else if (this.state.page === 2) {
      this.props.secondPage({
        userName: this.state.userName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      });
    } else if (this.state.page === 3) {
      this.props.thirdPage({
        currentCompany: this.state.currentCompany,
        totalExperience: this.state.totalExperience,
        designation: this.state.designation,
      });
    }

    this.setState({ page: this.state.page + 1 });
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Box className="signup">
          <Box className="signupContainer">
            <Box className="numbers">
              {this.state.page !== 4 ? (
                <>
                  <Avatar
                    className={this.state.page >= 1 ? "numbersActive" : ""}
                  >
                    1
                  </Avatar>
                  <hr className="hr" />
                  <Avatar
                    sx={{
                      border: " 0.5px solid #6b59d3",
                      backgroundColor: "whitesmoke",
                      color: "#6b59d3",
                      fontWeight: "bolder",
                    }}
                    className={this.state.page >= 2 ? "numbersActive" : ""}
                  >
                    2
                  </Avatar>
                  <hr className="hr" />
                  <Avatar
                    sx={{
                      border: " 0.5px solid #6b59d3",
                      backgroundColor: "whitesmoke",
                      color: "#6b59d3",
                      fontWeight: "bolder",
                    }}
                    className={this.state.page === 3 ? "numbersActive" : ""}
                  >
                    3
                  </Avatar>
                </>
              ) : null}
            </Box>
            {this.state.page === 1 && (
              <>
                <Box className="signUpTitle">SIGNUP INFO</Box>
                <Box className="signUpInput">
                  <TextField
                    type="email"
                    variant="outlined"
                    label="Email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                  <TextField
                    type="password"
                    label="Password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <TextField type="password" label="Confirm Password" />
                </Box>
                <Box className="signUpButtons">
                  <Button
                    disabled={this.state.page === 1}
                    onClick={() => {
                      this.setState({ page: this.state.page - 1 });
                    }}
                  >
                    Previous
                  </Button>

                  <Button
                    onClick={() => this.handleNext()}
                    disabled={
                      this.state.email === "" || this.state.password === ""
                    }
                  >
                    Next
                  </Button>
                </Box>
              </>
            )}

            {this.state.page === 2 && (
              <>
                <Box className="signUpTitle">PERSONAL INFO</Box>
                <Box className="signUpInput">
                  <TextField
                    type="text"
                    label="User Name"
                    onChange={(e) =>
                      this.setState({ userName: e.target.value })
                    }
                    value={this.state.userName}
                  />
                  <TextField
                    type="text"
                    label="First Name"
                    onChange={(e) =>
                      this.setState({ firstName: e.target.value })
                    }
                    value={this.state.firstName}
                  />
                  <TextField
                    type="text"
                    label="Last Name"
                    onChange={(e) =>
                      this.setState({ lastName: e.target.value })
                    }
                    value={this.state.lastName}
                  />
                </Box>
                <Box className="signUpButtons">
                  <Button
                    disabled={this.state.page === 1}
                    onClick={() => {
                      this.setState({ page: this.state.page - 1 });
                    }}
                  >
                    Previous
                  </Button>

                  <Button
                    onClick={() => this.handleNext()}
                    disabled={
                      this.state.userName === "" ||
                      this.state.firstName === "" ||
                      this.state.lastName === ""
                    }
                  >
                    Next
                  </Button>
                </Box>
              </>
            )}
            {this.state.page === 3 && (
              <>
                <Box className="signUpTitle">PROFESSIONAL INFO</Box>
                <Box className="signUpInput">
                  <TextField
                    type="text"
                    label="Current Company"
                    onChange={(e) =>
                      this.setState({ currentCompany: e.target.value })
                    }
                    value={this.state.currentCompany}
                  />
                  <TextField
                    type="text"
                    label=" Total Experience"
                    onChange={(e) =>
                      this.setState({ totalExperience: e.target.value })
                    }
                    value={this.state.totalExperience}
                  />
                  <TextField
                    type="text"
                    label="Designation"
                    onChange={(e) =>
                      this.setState({ designation: e.target.value })
                    }
                    value={this.state.designation}
                  />
                </Box>
                <Box className="signUpButtons">
                  <Button
                    disabled={this.state.page === 1}
                    onClick={() => {
                      this.setState({ page: this.state.page - 1 });
                    }}
                  >
                    Previous
                  </Button>

                  <Button
                    onClick={() => this.handleNext()}
                    disabled={
                      this.state.currentCompany === "" ||
                      this.state.totalExperience === "" ||
                      this.state.designation === ""
                    }
                  >
                    Next
                  </Button>
                </Box>
              </>
            )}
            {this.state.page === 4 && (
              <>
                <Box className="signUpTitle">THANK YOU!</Box>
                <Box className="list">
                  <Box>
                    {this.props.State.signUpReducer.firstPageInfo.email}
                  </Box>
                  <Box>
                    {this.props.State.signUpReducer.secondPageInfo.userName}
                  </Box>
                  <Box>
                    {this.props.State.signUpReducer.secondPageInfo.firstName}
                  </Box>
                  <Box>
                    {this.props.State.signUpReducer.secondPageInfo.lastName}
                  </Box>

                  <Box>
                    {
                      this.props.State.signUpReducer.thirdPageInfo
                        .currentCompany
                    }
                  </Box>
                  <Box>
                    {
                      this.props.State.signUpReducer.thirdPageInfo
                        .totalExperience
                    }
                  </Box>
                  <Box>
                    {this.props.State.signUpReducer.thirdPageInfo.designation}
                  </Box>
                </Box>
                <Box className="signUpButtons">
                  <Button
                    disabled={this.state.page === 1}
                    onClick={() => {
                      this.setState({ page: this.state.page - 1 });
                    }}
                  >
                    Previous
                  </Button>

                  <Button
                    onClick={() => this.handleNext()}
                    disabled={this.state.page === 4}
                  >
                    Next
                  </Button>
                </Box>
              </>
            )}
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
  firstPage: firstPage,
  secondPage: secondPage,
  thirdPage: thirdPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);
