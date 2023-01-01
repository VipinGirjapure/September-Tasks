import Facebook from "../Images/Facebook.png"
import Apple from "../Images/apple.png"
import Google from "../Images/google.png"
const Social = () =>{
    return(<>
    <div className="socialHeading">or continue with</div>
    <br />
    <div className="socialContainer">
        <div className="socialItem"></div>
        <img src={Facebook} alt="" className="socialItem"/>
        <img src={Apple} alt="" className="socialItem"/>
        <img src={Google} alt="" className="socialItem"/>
      
    </div>
    </>)
}
export default Social;