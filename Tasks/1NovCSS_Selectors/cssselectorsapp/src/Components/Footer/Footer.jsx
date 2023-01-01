import { Component } from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer">
          <div className="tooltip">
            <span className="tooltiptext">© Logo 2022</span>
            <img
              id="footer-logo"
              src="https://media.istockphoto.com/vectors/letter-v-logo-blue-vector-icon-ribbon-styled-font-vector-id849525242?k=6&m=849525242&s=170667a&w=0&h=gXbA1xxWApW8NkxAbuZLU5WhRiYnvXNbbSAcEuJYDjQ="
              alt="logo"
            />
          </div>
          <div id="footer-item">
            <div>
              <h5 className="footer-about-us">About Us</h5>
            </div>
            <h5 className="footer-contact-us">Contact Us</h5>
            <h5>© 2022</h5>
            <div id="footer-social">
              <AiOutlineInstagram />
              <AiFillTwitterCircle />
              <AiFillFacebook />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
