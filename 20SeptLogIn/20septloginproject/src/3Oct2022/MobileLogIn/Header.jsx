import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo 1.png"
const Header = ()=>{
    const navigate = useNavigate()
    return(<Box sx={{display:"flex",alignItems:"start",}}><img src={logo} alt="LOGO" style={{height:"60px",margin:"20px",cursor:"pointer"}} onClick={()=>navigate("/")}/></Box>)
}
export default Header;
