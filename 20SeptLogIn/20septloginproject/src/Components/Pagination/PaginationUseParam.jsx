import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, CardMedia, CardHeader, Avatar } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const PaginationUseParam = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { page, id } = useParams();
  const getAllBlogs = async () => {
    // console.log(page);
    setData([]);

    setOpen(true);

    try {
      const resp = await axios.get(
        `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${page}&limit=12`
      );

      setData(resp.data.posts);
    } catch (error) {
      navigate("*");
      console.log("err");
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
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
        from useParam
      </Typography>
      {data.length !== 0 ? (
        data
          .filter((item) => item._id === id)
          .map((item) => (
            <Box key={item._id}>
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
                  Title : {item.title}
                </Typography>
                <CardMedia
                  component="img"
                  // height="40%"

                  sx={{ height: "40vh", margin: "auto", objectFit: "contain" }}
                  image={
                    item.image
                      ? item.image
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
                  {item.subtitle}
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
                      {item.author.image
                        ? item.author.image
                        : item.author.name.slice(0, 1)}
                    </Avatar>
                  }
                  title={item.author.name}
                  subheader={
                    <Box>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {" "}
                        {"   "}
                        {new Date(`${item.date}`).getDate()}{" "}
                        {new Date(`${item.date}`).toLocaleString("default", {
                          month: "short",
                        })}{" "}
                        {new Date(`${item.date}`).getFullYear()}{" "}
                        {new Date(`${item.date}`).getHours()}:
                        {new Date(`${item.date}`).getMinutes()}
                      </Typography>
                    </Box>
                  }
                />

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "center", fontSize: "24px" }}
                >
                  {item.about}
                </Typography>
              </Box>
            </Box>
          ))
      ) : (
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
      )}
    </>
  );
};

export default PaginationUseParam;
