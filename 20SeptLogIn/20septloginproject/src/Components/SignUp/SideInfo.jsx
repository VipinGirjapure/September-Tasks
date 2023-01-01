import { Link } from 'react-router-dom';
import Saly from '../../Images/Saly-14.png'
const SideInfo = () => {
  return (
    <>
      <h1 className="sideInfoHeading">Sign Up to</h1>
      <div className="sideInfoLineTwo">Lorem Ipsum is simply</div>
      <div className="sideInfoNote">
        If you already have an account <br /> you can <span > <Link to ="/">Log In</Link></span>
      </div>{" "}
      <img src={Saly} alt="" className='salyImage'/>
    </>
  );
};

export default SideInfo;
