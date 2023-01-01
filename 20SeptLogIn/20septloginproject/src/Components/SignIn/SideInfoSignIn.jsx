import { Link } from "react-router-dom";
import Saly from "../../Images/Saly-14.png";
const SideInfoSignIn = () => {
  return (
    <>
    <div className="sideInfoContainer">

      <h1 className="sideInfoHeading">Sign In to</h1>
      <div className="sideInfoLineTwo">Lorem Ipsum is simply</div>
      <div className="sideInfoNote">
      If you don’t have an account <br /> you can{" "}
        <Link to="/signup">Register Here</Link>
      </div>{" "}
    </div>
      <img src={Saly} alt="" className="salyImage" />
    </>
  );
};

export default SideInfoSignIn;
