import {
  Box,
  Typography,
  CardMedia,
  CardHeader,
  Avatar,
  //   IconButton,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const PaginationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location);
  return (
    <>
      <Typography
        variant="h4"
        mb={2}
        sx={{ textAlign: "center", color: "dodgerblue" }}
      >
        Blogs Details
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }} gutterBottom>
        from useLocation
      </Typography>
      <Box
        sx={{
          width: "auto",
          padding: "11px",
          fontWeight: "600",
          backgroundColor: "lightblue",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          gutterBottom
        >
          Title : {location.state.title}
        </Typography>
        <CardMedia
          component="img"
          // height="40%"

          sx={{ height: "40vh", margin: "auto", objectFit: "contain" }}
          image={
            location.state.image
              ? location.state.image
              : "http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
          }
        />
        <hr />
        <Typography
          variant="button"
          gutterBottom
          sx={{ textAlign: "center" }}
          display="block"
        >
          {location.state.subtitle}
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: "#303030",
                color: "dodgerblue",
                border: "1px solid blue",
              }}
              aria-label=""
            >
              {location.state.author.image
                ? location.state.author.image
                : location.state.author.name.slice(0, 1)}
            </Avatar>
          }
          title={location.state.author.name}
          subheader={
            <Box>
              <Typography variant="caption" display="block" gutterBottom>
                {" "}
                {"   "}
                {new Date(`${location.state.date}`).getDate()}{" "}
                {new Date(`${location.state.date}`).toLocaleString("default", {
                  month: "short",
                })}{" "}
                {new Date(`${location.state.date}`).getFullYear()}{" "}
                {new Date(`${location.state.date}`).getHours()}:
                {new Date(`${location.state.date}`).getMinutes()}
              </Typography>
            </Box>
          }
        />

        <Typography
          variant="body1"
          gutterBottom
          sx={{ textAlign: "center", fontSize: "24px" }}
        >
          {location.state.about}
        </Typography>
      </Box>
      <Box>
        <Button
          size="small"
          sx={{ justifyContent: "center", width: "100%" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Box>
    </>
  );
};

export default PaginationDetails;
