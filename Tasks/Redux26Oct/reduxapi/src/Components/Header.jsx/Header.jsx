import { Component } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <>
        <Link to="/" style={{textDecoration:"none"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flexStart",
              alignItems: "center",
              color: "orange",
              fontSize: "20px",
              paddingLeft: "20px",
              height: "80px",
              fontWeight: "bolder",
              border: "0.2px solid orange",
              backgroundColor: "beige",
              textDecoration:"none"
            }}
          >
            POSTS
          </Box>
        </Link>
      </>
    );
  }
}
export default Header;
