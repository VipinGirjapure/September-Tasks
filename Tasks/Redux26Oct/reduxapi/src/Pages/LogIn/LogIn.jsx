import { Box, TextField, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { LogInAction2 } from "../../Redux/Actions/Action";
import "./LogIn.css";
import { Link, Navigate } from "react-router-dom";

const { Component } = require("react");

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      emp_id: "",
      password: "",
    };
  }
  handleSubmit() {
    this.props.LogInAction2({
      emp_id: this.state.emp_id,
      password: this.state.password,
    });
  }
  render() {
    if (this.props.State.LogInReducer.status === 200) {
      return <Navigate to="/dashboard" />;
    }
    // else {return <Navigate path="/login"/>}
    // console.log(this.props.State.LogInReducer)
    return (
      <>
        <Box className="logInPage">
          <Box className="logInContainer">
            <Box
              mb={2}
              sx={{ fontWeight: "bolder", fontSize: "22px", color: "orange" }}
            >
              Log In
            </Box>
            <TextField
              type="number"
              variant="outlined"
              label="Employee Id"
              sx={{ marginBottom: "8px" }}
              onChange={(e) => this.setState({ emp_id: e.target.value })}
            />
            <TextField
              type="Password"
              variant="outlined"
              label="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          
              <Button
                color="warning"
                variant="outlined"
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>

            <Link to="/">
              <Button color="success">Register Here</Button>
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
  LogInAction2: LogInAction2,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
