import { useEffect, useState } from "react";
import {
  // Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";


const CartPage = () => {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  // const [quantity, setQuantity] = useState(1);


  const getTotal = (item) => {
    try {
      setTotal(
        item.reduce((total, item) => {
          return total + (item.price*item.qty);
        }, 0)
      );
    } catch (error) {
      console.log("error in getTotal", error);
    }
  };
  const removeProduct = (removeID) => {
    // console.log(removeID);
    const removedProd = item.filter((item) => item._id !== removeID);
    const updatedCart = [...item];
    const deleted = updatedCart.findIndex((each) => {
      return each._id === removeID;
    });
    updatedCart.splice(deleted, 1);
    setItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(removedProd));
    console.log(item);
  };
  const handlePlusQuantity = (i) => {
    // console.log(id)
   const t =  item.map((_item) => {
      if (_item._id === i._id) {
        console.log("add")
    //   _item.qty++;
        return {..._item, qty:_item.qty +1};
      } else {
        return _item;
      }
    });
    // console.log(t,i._id)
    setItem(t)
  };
  const handleMinusQuantity = (i) => {
    // console.log(id)
   const t =  item.map((_item) => {
      if (_item._id === i._id) {
        console.log("add")
    //   _item.qty++;
        return {..._item, qty:_item.qty - 1};
      } else {
        return _item;
      }
    });
    // console.log(t,i._id)
    setItem(t)
  };


  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("cartItem"));
    // console.log(item);
    if (item) {
      setItem(item);
      getTotal(item);
    }
  }, []);
  useEffect(() => {
    getTotal(item);
  }, [item]);

  return (
    <>
      <Typography sx={{ textAlign: "center", margin: "none" }} variant="h4">
        Cart
      </Typography>
      <Box mt={5}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 1, sm: 8, md: 9, lg: 12 }}
          sx={{ backgroundColor: "lightblue", minHeight: "50vh" }}
        >
          {item.length !== 0 ? (
            item.map((item, i) => {
            //   item.qty = 1;
              return (
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
                  <Card
                    sx={{
                      maxWidth: 280,
                      m: "auto",
                      height: "auto",
                      width: "auto",
                      borderRadius: "15px",
                    }}
                  >
                    {/* <CardMedia
                  component="img"
                  alt="Hello !"
                  height="fit-content"
                  image={
                    item.images
                      ? "https://developer.android.com/static/codelabs/basic-android-kotlin-training-internet-images/img/467c213c859e1904.png"
                      : "https://www.eps.org/global_graphics/default-store-350x350.jpg"
                  }
                /> */}
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                      {item.id}
                    </Typography> */}
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
                      <Typography sx={{ margin: "auto", textAlign: "center" }}>
                        {" "}
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {item.price}{" "}
                      </Typography>
                      <CardContent
                        sx={{
                          display: "flex",
                          margin: "auto",
                          justifyContent: "center",
                        }}
                      >
                        <Button onClick={() => handleMinusQuantity(item)} disabled={item.qty === 1}>-</Button>
                        {item.qty}
                        <Button onClick={() => handlePlusQuantity(item)}>
                          +
                        </Button>
                      </CardContent>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="error"
                        sx={{
                          margin: "auto",
                          justifyContent: "center",
                          width: "100%",
                        }}
                        variant="contained"
                        onClick={() => removeProduct(item)}
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Typography
              variant="h4"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              No products in cart !
            </Typography>
          )}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Price Total : <i className="fa fa-inr" aria-hidden="true"></i>
          {total}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          + GST : <i className="fa fa-inr" aria-hidden="true"></i>
          {parseInt(total * 1.18)}
        </Typography>
      </Box>
    </>
  );
};

export default CartPage;
