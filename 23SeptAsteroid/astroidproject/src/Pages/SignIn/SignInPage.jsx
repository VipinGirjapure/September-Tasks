import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";
const SignInPage = () => {
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [singleAst, setSingleAst] = useState({});
  const [warn, setWarn] = useState(false);

  // const [randomAst, setRandomAst] = useState([]);
  // const[note,setNote] = useState(false)
  // const [astroid, setAstroid] = useState([]);
  // const location = useLocation();
  const navigate = useNavigate();

  const getAsteroid = async (data) => {
    try {
      const resp = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${data}?api_key=7yumOBzypHDQLB7fpF7F0oWDvbwgftsdoxbDX2DZ`
      );

      // console.log(resp.data);

      if (resp.status === 200) {
        // setSingleAst(resp.data);

        navigate(`/details/${data}`, { state: resp.data });
      }
    } catch (err) {
      if (err.response.request.status === 404) {
        // navigate("/details/idnotfound");

        setWarn(true);
      }
    } finally {
      setIsLoading(false);
    }

    if (isLoading) return <h1>Loading Data</h1>;
    console.log(id);
    // navigate(`/details/${id}`)
  };
  //  useEffect(() => {
  //    getAsteroid();
  //  }, []);
  const RandomAstroid = async () => {
    try {
      const resp = await axios.get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=7yumOBzypHDQLB7fpF7F0oWDvbwgftsdoxbDX2DZ"
      );

      // console.log(res.status)
      // navigate("/datails")
      // if (res.status === 200) {
      // setRandomAst(res.data.near_earth_objects);
      console.log(resp.data.near_earth_objects);
      // setId(Math.floor(Math.random() * ))
      const randomID =
        resp.data.near_earth_objects[
          Math.floor(Math.random() * resp.data.near_earth_objects.length)
        ].id;

      getAsteroid(randomID);
      console.log(randomID);
      // console.log( Math.floor(Math.random() * res.data.near_earth_objects.length))
      // }
    } catch (error) {
      // console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    if (isLoading) return <div>Loading Data</div>;
    console.log("Random");
  };

  return (
    <>
      <div className="SignInBody">
        <div className="signInContainer">
          <TextField
            id="outlined-basic"
            label="Enter Asteroid ID"
            variant="outlined"
            type="number"
            sx={{ color: "blue" }}
            placeholder="Enter ID in numbers only"
            className="signInItem"
            // id="signInInput"
            value={id}
            onChange={(e) => {
              setWarn(false);
              setId(e.target.value);
            }}
          />
          <div className="warn">
            {warn ? (
              <h4>Astroid of this ID is not found please enter correct ID</h4>
            ) : (
              " "
            )}
          </div>
          <Button
            variant="contained"
            sx={{ mt: "8px" }}
            disabled={id.length === 0}
            // onClick={() => navigate(`/details/${id}`)}
            onClick={() => getAsteroid(id)}
          >
            Submit
          </Button>

          <Button variant="contained" onClick={() => RandomAstroid()}>
            Random Asteroid
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
