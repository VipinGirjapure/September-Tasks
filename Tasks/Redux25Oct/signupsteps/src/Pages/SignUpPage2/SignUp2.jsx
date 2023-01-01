// import { Box, Button, TextField } from "@mui/material";
// import { Component } from "react";
// import { connect } from "react-redux";
// import { firstPage } from "../../Redux/Actions/Action";
// import "../../../src/Pages/SignUpPage1/SignUp.css";
// class SignUp2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       page: 1,
//     };
//   }
//   handleNext() {
//     this.props.firstPage([
//       ...this.props.State.signUpReducer.firstPageInfo,
//       {
//         email: this.state.email,
//         password: this.state.password,
//       },
//     ]);
//     this.setState({ page: this.state.page + 1 });
//   }
//   render() {
//     return (
//       <>
        
//       </>
//     );
//   }
// }
// const mapStateToProps = (State) => ({
//   State: State,
// });
// const mapDispatchToProps = {
//   firstPage: firstPage,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SignUp2);
