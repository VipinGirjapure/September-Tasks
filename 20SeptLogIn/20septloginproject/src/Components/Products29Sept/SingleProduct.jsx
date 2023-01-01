import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  CardHeader,
  Avatar,
  Button,
  Card,
  Grid,
  CardContent,
  CardActions,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const getSingleProduct = async () => {
    // console.log(page);

    setOpen(true);
    // console.log(id)
    try {
      const resp = await axios.get(
        `https://empappregular.herokuapp.com/getPostById/${id}`
      );
      // console.log((resp.d);
      setProduct(resp.data);
    } catch (error) {
      navigate("*");
      console.log("err");
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
 
  return (
    <>
     <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", color: "#303030" }}
        >
          Product Details
        </Typography>
      </Box>
      {product.length !== 0 ? (
        <>
           <Grid
                item
                xs={1}
                sm={4}
                md={3}
               
                mt={2}
                mb={5}
                sx={{ height: "100%", width: "100%", borderRadius: "15px" }}
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
                  product.images
                      ? "https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/467c213c859e1904.png"
                      : "https://www.eps.org/global_graphics/default-store-350x350.jpg"
                  }
                />
                  <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                      {item.id}
                    </Typography> */}
                    <Typography variant="body1" color="text.secondary">
                      {" "}
                      Title :{product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                      sx={{ minHeight: "59px" }}
                    >
                      Subtitle : {product.subtitle}
                    </Typography>
                   
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                      sx={{ minHeight: "59px" }}
                    >
                      About : {product.about}
                    </Typography>
                    <Typography sx={{ margin: "auto", textAlign: "center" }}>
                      {" "}
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {product.price}{" "}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button
                      size="small"
                      color="error"
                      sx={{
                        margin: "auto",
                        justifyContent: "center",
                        width: "100%",
                      }}
                      variant="contained"
                      // onClick={() => removeProduct(product._id)}
                    >
                      Remove
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
        </>
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

export default SingleProduct;
