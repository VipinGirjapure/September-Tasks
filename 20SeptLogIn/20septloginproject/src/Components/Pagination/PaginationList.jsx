import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Pagination,
  Grid,
} from "@mui/material";
import { data } from "../.././DemoData";
import UsePagination from "./UsePagination";

const PaginationList = () => {
  const [page, setPage] = useState(1);
  //   const [data, setData] = useState([]);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const DATA = UsePagination(data, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };
  //
  //   const [loading, setLoading] = useState(true);
  // const getPaginationList = async () => {
  //     try {

  //         const resp = await axios
  //         .get(
  //             "https://empappregular.herokuapp.com/getPostsByPage?pageNumber=1&limit=10"
  //             )
  //             .then((res) => setData(res.data.posts));
  //         } catch (error) {
  //             console.log(error)

  //         }
  //     };

  useEffect(() => {
    //   getPaginationList();
  }, []);

  //   return <>

  //   {

  // data.map((item)=> <ul><li>
  //     {console.log(item)}
  //     </li></ul>)

  //   }</>;
  return (
    <>
      <Typography>Page: {page}</Typography>

      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
      <Grid container spacing={2}>
        <Grid item>
          {DATA.currentData().map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default PaginationList;
