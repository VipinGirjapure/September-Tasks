import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./ContextComp";
const AddDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [err, setErr] = useState("");
  const { data, setData } = useContext(context);
  const navigate = useNavigate();

  // console.log(data.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    var Data = JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      address: address,
      gender: gender,
    });
    try {
      const resp = await axios.put(
        `https://radiant-anchorage-95660.herokuapp.com/user/update/${data.id}`,
        Data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
      if (resp.status === 200) {
        navigate("/verification/dashboard");
        setData(resp.data);
      }
    } catch (error) {
      setErr(error.response.data.errors[0].message);
    }
  };
  return (
    <>
      <Grid item xs={12} sm={8} md={5} sx={{ alignItems: "center",margin:"auto" }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "orangered" }}>
            Add Details
          </Typography>
          <Box component="form">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
            />{" "}
            <br />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              sx={{textAlign:"center",width:"auto"}}
              onChange={(e) => setLastName(e.target.value)}
            />{" "}
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <TextField
              id="standard-basic"
              label="Gender"
              variant="standard"
              onChange={(e) => setGender(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />{" "}
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,borderRadius:"15px" }}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Add details
            </Button>
            <Typography varient="h6" color="red" sx={{ textAlign: "center" }}>
              {err}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default AddDetails;
