import { Avatar, Box, Grid } from "@mui/material";
// import { Container } from "@mui/material";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";

import "../Pagination/Pagination.css";

// import { data } from "../../DemoData";

const PagiNation = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  //   const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(5);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getPaginationList = async () => {
    // setLoading(true);
    try {
      setData([]);
      setOpen(true);
      const resp = await axios.get(
        `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${page}&limit=12`
      );
      // console.log(resp.data.posts);
      setData(resp.data.posts);
      setCount(resp.data.numberOfPages - 1);
    } catch (error) {
      console.log(error);
    } finally {
      //   setLoading(false);
      setOpen(false);
    }
  };
  useEffect(() => {
    getPaginationList();
  }, [page]);
  //   var today = new Date();

  // Getting full month name (e.g. "June")
  // var month = today.toLocaleString();
  // console.log(today.getDate());
  const getBlogId = (item) => {
    // console.log(id);
    navigate(`/blogsdetails`, {
      state: item,
    });
  };
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        mt={2}
        mb={5}
        sx={{ textAlign: "center", color: "dodgerblue" }}
      >
        Blog List
      </Typography>
      {/* ;<Typography sx={{ textAlign: "center" }}>{page}</Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          value={page}
          count={count}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
        />
      </Box>

      {
        <Box mt={5}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, sm: 8, md: 9 }}
            sx={{ backgroundColor: "lightblue", minHeight: "50vh" }}
          >
            {data.length !== 0 ? (
              data
                .map((item, i) => (
                  <Grid
                    item
                    xs={1}
                    sm={4}
                    md={3}
                    key={i}
                    mt={2}
                    mb={5}
                    sx={{ height: "100%", width: "100%", borderRadius: "15px" }}
                  >
                    {/* { console.log(item._id)} */}
                    <Card
                      sx={{
                        maxWidth: 345,
                        m: "auto",
                        height: "406px",
                        width: "auto",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="Thanks For Reading"
                        height="140"
                        image={
                          item.images
                            ? "https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/467c213c859e1904.png"
                            : "http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
                        }
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.id}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {" "}
                          Title :{item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          mt={1}
                          sx={{ minHeight: "59px" }}
                        >
                          Subtitle : {item.subtitle}
                        </Typography>
                      </CardContent>
                      <CardActions>
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

                        {/* <Box>
                        </Box> */}
                        <Typography ml={1}> {item.author.name}</Typography>

                        <Button
                          size="small"
                          sx={{
                            margin: "auto",
                            justifyContent: "flex-end",
                            width: "100%",
                          }}
                          onClick={() => getBlogId(item)}
                        >
                          Read more
                        </Button>
                        {/* <Typography>
                        </Typography> */}
                      </CardActions>
                      <CardActions>
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

                        <Button
                          size="small"
                          onClick={() =>
                            navigate(`blogsdetails/${page}/${item._id}`)
                          }
                          sx={{
                            margin: "auto",
                            justifyContent: "flex-end",
                            width: "100%",
                          }}
                        >
                          Click
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
                .reverse()
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

              //   <img
              //     style={{ margin: "auto" }}
              //     src="http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
              //   />
            )}
          </Grid>
        </Box>
      }
      <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
      <Box
        sx={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          value={page}
          count={count}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
          mt={2}
          mb={5}
        />
      </Box>
    </>
  );
};
export default PagiNation;
