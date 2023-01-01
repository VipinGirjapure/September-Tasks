import {
  Avatar,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Icon,
  Pagination,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [warn, setWarn] = useState(false);
  const [rerender, setRerender] = useState(false);

  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      setProducts([]);
      setOpen(true);
      const resp = await axios.get(
        `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${page}&limit=12`
      );

      setProducts(resp.data.products);
      setCount(resp.data.numberOfPages - 1);
    } catch (error) {
      navigate("*");
    }
  };

  const addToCart = (item) => {
    setWarn(false);
    setRerender(!rerender);
    const localCart = JSON.parse(localStorage.getItem("cartItem"));
    if (localCart == null) {
      const newCart = [];
      newCart.push(item);
      localStorage.setItem("cartItem", JSON.stringify(newCart));
    } else {
      const inCart = localCart.some((product) => product._id === item._id);
      if (!inCart) {
        localCart.push(item);
        localStorage.setItem("cartItem", JSON.stringify(localCart));
      } else {
        // alert("already added product");
        setWarn(true);
      }
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [page]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cartItem"));
    localCart && setCartItemCount(localCart.length);
  }, [rerender]);
  return (
    <>
      <Box>
        {warn ? "already" : ""}
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: "center", color: "#303030" }}
        >
          Products
        </Typography>
      </Box>
      <Box sx={{ display: "flex", margin: "auto", justifyContent: "right" }}>
        <Button
          onClick={() => navigate("/cartpage")}
          sx={{ marginRight: "18px" }}
        >
          <img
            src="https://img.icons8.com/ios/30/000000/shopping-cart.png"
            alt="Cart"
          />
          <Box sx={{ marginTop: "-13px" }}>{cartItemCount}</Box>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>

      {
        <Box mt={5}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, sm: 8, md: 9, lg: 12 }}
            sx={{
              backgroundColor: "lightblue",
              minHeight: "50vh",
              marginTop: "0",
            }}
          >
            {products.length !== 0 ? (
              products
                .map((item, i) => {
                  item.qty = 1;
                  return (
                    <Grid
                      item
                      xs={1}
                      sm={4}
                      md={3}
                      key={i}
                      // mt={2}
                      mb={3}
                      sx={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "15px",
                        marginTop: "2px",
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: 280,
                          m: "auto",
                          height: "auto",
                          width: "auto",
                          borderRadius: "15px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="Hello !"
                          height="fit-content"
                          image={
                            item.images
                              ? "https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/467c213c859e1904.png"
                              : "https://www.eps.org/global_graphics/default-store-350x350.jpg"
                          }
                        />
                        <CardContent
                          sx={{ margin: "auto", textAlign: "center" }}
                        >
                          <Typography
                            sx={{ margin: "auto", textAlign: "center" }}
                          >
                            {" "}
                            {item.price}{" "}
                            <i className="fa fa-inr" aria-hidden="true"></i>
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {" "}
                            Title :{item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ minHeight: "59px", padding: "0" }}
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

                          <Typography ml={1}> {item.author.name}</Typography>
                        </CardActions>
                        <CardActions>
                          <Button
                            size="small"
                            sx={{
                              margin: "auto",
                              justifyContent: "center",
                              width: "100%",
                            }}
                            variant="contained"
                            onClick={() => {
                              navigate(`getPostById/${item._id}`, {
                                state: item,
                              });
                            }}
                          >
                            Details
                          </Button>
                          <Button
                            size="small"
                            sx={{
                              margin: "auto",
                              justifyContent: "center",
                              width: "100%",
                            }}
                            variant="contained"
                            onClick={() => {
                              addToCart(item);
                            }}
                          >
                            Add to cart
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })
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
            )}
          </Grid>
        </Box>
      }
      <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
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
          mt={2}
          mb={5}
        />
      </Box>
    </>
  );
};

export default ProductsList;
