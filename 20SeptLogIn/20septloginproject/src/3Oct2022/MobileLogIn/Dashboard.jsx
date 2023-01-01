import { CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { context } from "./ContextComp";

const Dashboard = () => {
  const { data } = useContext(context);
  console.log(data);
  return (
    <>
      <hr />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "orangered",
          fontWeight: "bolder",
          textDecoration: "underline",
        }}
      >
        Details
      </Typography>
      <Grid
        container
        component="main"
        sx={{
          height: "575px",
          width: "100%",
          justifyContent: "center",
          paddingTop:"44px"
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{ alignItems: "center",}}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",

                fontSize: "25px",
              }}
            >
              First Name :
            </Typography>
            
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",
                fontSize: "25px",
              }}
            >
              Last Name :
            </Typography>
        
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",
                fontSize: "25px",
              }}
            >
              Gender :
            </Typography>
         
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",
                fontSize: "25px",
              }}
            >
              Email :
            </Typography>
           
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",
                fontSize: "25px",
              }}
            >
              Address :
            </Typography>
           
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                display: "inline",
                color: "orangered",
                fontWeight: "bold",
                //   marginRight: "20px",
                fontSize: "25px",
              }}
            >
              Mobile Number :
            </Typography>
           
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{ alignItems: "center", }}
        >
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.firstname}
      </Typography>
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.lastname}
      </Typography>
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.gender}
      </Typography>
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.email}
      </Typography>
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.address}
      </Typography>
            <Typography
        sx={{
          fontSize: "26px",
          color: "lightgreen",
          fontFamily: "ui-sans-serif",
          fontWeight: "bold",
        }}
      >
        {data.mobile}
      </Typography>
      </Grid>
      </Grid>
      {/* <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "orangered",
          fontWeight: "bolder",
          textDecoration: "underline",
        }}
      >
        Details
      </Typography>
      <CardContent
        sx={{
          textAlign: "center",
          alignContent: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexFlow: "column",
          margin: "auto",
          height: "60vh",
          width: "fit-content",
        }}
      >
        
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
            //   marginRight: "20px",

              fontSize: "25px",
            }}
          >
            First Name :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            }}
          >
            {data.firstname}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
            //   marginRight: "20px",
              fontSize: "25px",
            }}
          >
            Last Name :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            }}
          >
            {data.lastname}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "fit-content",
          }}
        >
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
              fontSize: "25px",
            //   marginRight: "20px",
            }}
          >
                Gender :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            //   marginRight: "20px",
            }}
          >
            {" "}
            {data.gender}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
              fontSize: "25px",
            //   marginRight: "20px",
            }}
          >
               Email :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            //   marginRight: "20px",
            }}
          >
            {data.email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
              fontSize: "25px",
            //   marginRight: "20px",
            }}
          >
            Address :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            //   marginRight: "20px",
            }}
          >
            {data.address}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "inline",
              color: "orangered",
              fontWeight: "bold",
              fontSize: "25px",
            //   marginRight: "20px",
            }}
          >
            Mobile No :
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              color: "lightgreen",
              fontFamily: "ui-sans-serif",
              fontWeight: "bold",
            //   marginRight: "20px",
            }}
          >
            {data.mobile}
          </Typography>
        </Box>
      </CardContent> */}
    </>
  );
};
export default Dashboard;
