import { Component } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../Pages/LogIn/LogIn.css";
import { SignUpAction2 } from "../../Redux/Actions/Action";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp_id: "",
      name: "",
      password: "",
    };
  }
  handleSignUp() {
    this.props.SignUpAction2({
      emp_id: this.state.emp_id,
      name: this.state.name,
      password: this.state.password,
    });
  }

  render() {
    return (
      <>
        <Box className="logInPage">
          <Box className="logInContainer">
          <Box mb={2} sx={{fontWeight:"bolder",fontSize:"22px",color:"orange",}}>
              Sign Up
            </Box>
            <TextField
              type="number"
              variant="outlined"
              label="Employee Id"
              sx={{ marginBottom: "8px" }}
              onChange={(e) => this.setState({ emp_id: e.target.value })}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Name"
              sx={{ marginBottom: "8px" }}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <TextField
              type="Password"
              variant="outlined"
              label="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            <Button color="warning" variant="outlined" onClick={()=>this.handleSignUp()}>
              Sign Up
            </Button>
            <Link to='/login'>
            <Button color="success">go to LogIn</Button>
            </Link>
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
  SignUpAction2: SignUpAction2,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
