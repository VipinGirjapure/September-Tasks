import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

import "./Details.css";
// import { useEffect } from "react";
// import { useState } from "react";
import { Button } from "@mui/material";
// import AstNotFond from "../AstNotFound.jsx/AstNotFound";

const Details = () => {
  //   const [singleAst, setSingleAst] = useState({});
  // const { id } = useParams();
  //   const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  return (
    // <>
    //   {
    <>
      <div className="detailsContainer">
        <div className="detailsHeading">Asteroid Details : </div>
        <br />
        <br />
        <div className="">
          {" "}
          Asteroid Id :<span>{location.state.id}</span>
        </div>
        <div className="">
          {" "}
          Asteroid Name :<span>{location.state.name}</span>
        </div>
        <div className="">
          {" "}
          Nasa_jpl_url :
          <a
            href={location.state.nasa_jpl_url}
            target="_blank"
            rel="noreferrer"
          >
            {location.state.nasa_jpl_url}
          </a>
        </div>
        <div className="">
          <span>
            {location.state.is_potentially_hazardous_asteroid ? (
              <h4>It is potentially hazardous asteroid</h4>
            ) : (
              <h4>It is Not potentially hazardous asteroid</h4>
            )}
          </span>
        </div>

        <Button variant="contained" onClick={() => navigate("/")}>
          Back To Home
        </Button>
      </div>
    </>
    //   }
  );
};
export default Details;
