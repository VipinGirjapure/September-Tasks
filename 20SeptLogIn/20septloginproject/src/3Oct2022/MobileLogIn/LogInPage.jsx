import {
  Backdrop,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";

import LoginBike from "../../Images/LoginBike.png";
import { context } from "./ContextComp";

const LogInPage = () => {
  const { getOtp, setMobile, err,open } = useContext(context);

  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "575px",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
      >
        <Grid item xs={12} sm={8} md={5} sx={{ alignItems: "center" }}>
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
              display="block"
              gutterBottom
            //   component="h1"
              sx={{ color: "orangered",fontSize:"2rem", }}
            >
              WELCOME BACK!
            </Typography>
            <Typography fontWeight={500} align="center" color="textSecondary">
              Login Account
            </Typography>
            <Box>
              <TextField
                type="number"
                label="Mobile No." variant="outlined"
                placeholder="Enter mobile number"
                sx={{ width: "100%", mt: 3,color:"#94CD00"}}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, borderRadius: "18px", color: "#94CD00",border:"1px solid #DF201F" }}
                onClick={() => getOtp()}
              >
                Get OTP
              </Button>
              <Typography varient="h6" color="red" sx={{ textAlign: "right" }}>
                {err ? err + "!" : null}
              </Typography>
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
            </Box>
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
        /> */}
     
        </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>   <CardMedia component="img" 
        image={LoginBike}
       
        /> </Grid>
        
      </Grid>
    </>
  );
};
export default LogInPage;
