import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Demo = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography varient="h3">Sign In to</Typography>
            <Typography varient="h5">Lorem is a simply</Typography>
            <Typography varient="h6" sx={{ mt: 5 }}>
              If you dont have an account register
            </Typography>
            <Typography varient="h6">Register Now </Typography>
          </Grid>
          <Grid
        
          >
            <Typography varient="h4" sx={{ mt: 15 }}>
              Sign In
            </Typography>
            {/* <TextField varient="filled" placeholder="emp id" /> */}
            <TextField
              id="outlined-basic"
              label="Employee ID"
              variant="outlined"
              sx={{ mt: 3 }}
              placeholder="Enter ID"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              varient="outlined"
              placeholder="password"
              sx={{ mt: 3 }}
            />
            <Typography sx={{ mt: 3, textAlign: "right" }}>
              Forgot password
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 20 }}
              fullWidth
              size="large"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Demo;
