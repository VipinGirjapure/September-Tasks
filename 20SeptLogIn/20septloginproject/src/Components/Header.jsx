import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Apple from "../Images/apple.png";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <Button>
        <img
          src={Apple}
          alt=""
          style={{ margin: "9px", border: "none", backgroundColor: "white" }}
          onClick={() => navigate("/")}
        />
      </Button>
    </div>
  );
};

export default Header;
