import "../Details/Details.css";
import "./AstNotFound.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AstNotFond = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="astNotFoundContainer">
        <div className="astNotFoundItem">
          Asteroid ID not found please enter another ID ...
        </div>
        {/* <br />
        <br /> */}
       
       <Button variant="contained" sx={{mt:'12px'}} onClick={() => navigate("/")}>
              Back To Home
            </Button>
      </div>
    </>
  );
};

export default AstNotFond;
