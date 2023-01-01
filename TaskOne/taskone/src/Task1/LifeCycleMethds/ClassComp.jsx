import { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      Name: "Ben",
    };
  }

  componentDidMount() {
    console.log("DidMounted");
  }

  shouldComponentUpdate() {
    if (this.state.Name === "Vipin") {
      return false;
    } else {
      console.log("ShouldUpdate");
      return true;
    }
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  render() {
    return (
      <>
        <h2>{this.state.Name}</h2>
        <button onClick={() => this.setState({ Name: "Vipin" })}>
          Click Here
        </button>
      </>
    );
  }
}
export default ClassComp;
