import {
  Backdrop,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useContext } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Verification from "../../Images/Verification.png";
import { context } from "./ContextComp";

const VerificationPage = () => {
  const [inputOtp, setInputOtp] = useState("");

  const [err, setErr] = useState("");
  const { otp, data, getOtp, open,counter,setCounter } = useContext(context);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(otp);
  }, []);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  const OtpVerification = () => {
    console.log(inputOtp);
    if (otp !== "" && otp === inputOtp && !data.profileUpdated) {
      navigate("/verification/adddetails");

    } else if (otp !== inputOtp) {
      setErr("You have entered wrong otp");
    } else if (otp === inputOtp && data.profileUpdated) {
      navigate("/verification/dashboard");
    } else {
      alert("Please Enter OTP");
    }
  };

  return (
    <>
      <Grid
        container
        component="main"
        sx={{ height: "575px", width: "100%", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{ alignItems: "center", backgroundColor: "grey" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "#94CD00", fontSize: "2rem" }}
            >
              Verification
            </Typography>
            <Typography fontWeight={200} align="center" color="textSecondary">
              enter a verification code sent to {data.mobile}
            </Typography>

            <Box mt={2}>
              <OtpInput
                type="number"
                value={inputOtp}
                onChange={(e) => setInputOtp(e)}
                separator={<span style={{ width: "8px" }}></span>}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid rgba(0,0,0,0.3)",
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: "400",
                  caretColor: "blue",
                  color: "black",
                }}
              />
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 ,borderRadius:"18px"}}
                onClick={() => OtpVerification()}
                disabled={inputOtp === "" && counter === 0}
              >
                Verification
              </Button>
              <Typography fontWeight={500} align="center" color="textSecondary">
                {" "}
                Resend OTP in{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {" "}
                  00:{counter}
                </span>{" "}
              </Typography>
              <Button
                type="submit"
                fullWidth
                mt={1}
                variant="contained"
                color="error"
                disabled={counter !== 0}
                onClick={() => getOtp()}
              >
                Resend
              </Button>
              <Typography sx={{ color: "red" }}>{err}</Typography>
            </Box>
          </Box>
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
          >
            <CircularProgress
              disableShrink
              size={"100px"}
              sx={{ justifyContent: "center", margin: "auto" }}
            />
          </Backdrop>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CardMedia component="img" image={Verification} />
        </Grid>
      </Grid>
    </>
  );
};
export default VerificationPage;
