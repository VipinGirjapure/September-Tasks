// import SideInfo from "../SignUp/SideInfo";
import axios from "axios";
import Social from "../Social";
import SideInfoSignIn from "./SideInfoSignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [visible, setVisible] = useState(true);
  const [inputData, setInputData] = useState({
    emp_Id: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      emp_id: parseInt(inputData.userId),
      password: inputData.password,
    };
    axios
      .post("https://empappregular.herokuapp.com/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        if (res.status === 200) {
          if (res.data?.token) {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("user", res.data.user);
            navigate("/datalist");
          } else {
            setError(res.data.message);
          }
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h1 className="signHeading">Sign In</h1>
      <form action="" className="signUpForm">
        <input
          type="text"
          id="employeeID"
          value={inputData.userId}
          placeholder="Please Enter Employee ID"
          onChange={handleInputData}
          name="userId"
          required
        />
        <br />
        <div className="passwordOneContainer">
          <input
            type={visible ? "password" : "text"}
            name="password"
            value={inputData.password}
            required
            onChange={handleInputData}
            placeholder="Enter a password"
          />
          <i
            className={visible ? "far fa-eye" : "fa fa-eye-slash"}
            id="togglePassword1"
            onClick={() => setVisible(!visible)}
          ></i>
        </div>{" "}
        <br />
        <button
          className="logInButton"
          onClick={(e) => handleSubmit(e)}
          disabled={
            (inputData.emp_Id.length === 0 || "") &&
            (inputData.password === 0 || "")
          }
        >
          Login
        </button>
        {error}
        <Social />
      </form>
      <SideInfoSignIn />
    </>
  );
};

export default SignIn;
