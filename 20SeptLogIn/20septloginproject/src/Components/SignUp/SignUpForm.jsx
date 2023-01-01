import axios from "axios";
import { useState } from "react";
import Social from "../Social";
import SideInfo from "./SideInfo";

const SignUpForm = () => {
  const [visible, setVisible] = useState(true);
  const [inputData, setInputData] = useState({
    userId: "",
    userName: "",
    contact: "",
    password: "",
  });
  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(inputData);
    const userData = {
      emp_id: Number(inputData.userId),
      name: inputData.userName,
      password: inputData.password,
    };
    axios
      .post("https://empappregular.herokuapp.com/signUp", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="signHeading">Sign Up</h2>
      <div className="signUpForm">
        <input
          type="text"
          placeholder="Enter Id"
          id="signUpEmail"
          name="userId"
          value={inputData.userId}
          required
          onChange={handleInputData}
        />
        <br />
        <input
          type="text"
          placeholder="Create User name"
          name="userName"
          value={inputData.userName}
          required
          onChange={handleInputData}
        />
        <br />
        <input
          type="text"
          placeholder="Contact Number"
          name="contact"
          required
          onChange={handleInputData}
          value={inputData.contact}
        />
        <br />
        <div className="passwordOneContainer">
          <input
            type={visible ? "password" : "text"}
            name="password"
            required
            value={inputData.password}
            placeholder="Enter Password"
            onChange={handleInputData}
          />
          <i
            className={visible ? "far fa-eye" : "fa fa-eye-slash"}
            id="togglePassword1"
            onClick={() => setVisible(!visible)}
          ></i>
        </div>
     
        <div className="passwordOneContainer">
          <input
            type={visible ? "password" : "text"}
            placeholder="Confirm Password"
            onChange={handleInputData}
          />

          <i
            className={visible ? "far fa-eye" : "fa fa-eye-slash"}
            id="togglePassword2"
            onClick={() => setVisible(!visible)}
          ></i>
        </div>

        <br />

        <button className="RegisterButton" onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        <Social />
      </div>
      <SideInfo />
    </>
  );
};

export default SignUpForm;
