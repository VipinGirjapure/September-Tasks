import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const context = createContext([]);
export const ContextFunc = ({ children }) => {
  const [otp, setOtp] = useState("");
  const [data, setData] = useState([]);
  const [mobile, setMobile] = useState("");
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(59);


  const navigate = useNavigate();

  const getOtp = async () => {
    try {
      setOpen(true);
      setCounter(59)
      const logInData = {
        mobile: mobile,
      };
      const resp = await axios.post(
        "https://radiant-anchorage-95660.herokuapp.com/user/get-otp",
        JSON.stringify(logInData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.status === 200) {
        setOpen(false);
        navigate("/verification");
        setOtp(resp.data.otp);
        setData(resp.data);
      }
      console.log(otp);
      console.log(resp.data.otp);
    } catch (error) {
      setErr(error.response.data.errors[0].message);
      setOpen(false);
    }
  };

  return (
    <>
      <context.Provider
        value={{
          setOtp,
          otp,
          data,
          setData,
          getOtp,
          setMobile,
          err,
          setErr,
          open,
          counter,
          setCounter
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};
