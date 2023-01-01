import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="footer-childdiv-1">
          <span className="upskill-heading">Upskill</span>
          <p>A best and cheapest way of geeting know learning</p>

          <span>Subscribe Newsletter</span>
          <div className="footer-input-div">
            <input
              className="footer-input"
              placeholder="Enter your email"
            ></input>
            <div className="footer-input-btn"></div>
          </div>
        </div>
        <div className="footer-childdiv-2">
          <span className="footer-span">Information</span>
          <li className="footer-li">Home</li>
          <li className="footer-li">About</li>
          <span>Courses</span>
          <li className="footer-li">New</li>
          <li className="footer-li">Popular</li>
        </div>
        <div className="footer-childdiv-3">
          <span className="footer-span">Helpful Links</span>
          <li className="footer-li">Students</li>
          <li className="footer-li">Business</li>
          <li className="footer-li">Instructor</li>
        </div>
        <div className="footer-childdiv-4">
          <span className="footer-span">Our Services</span>
          <li className="footer-li">Design</li>
          <li className="footer-li">Study</li>
          <li className="footer-li">Marketting</li>
          <li className="footer-li">UI/Ux</li>
        </div>
        <div className="footer-childdiv-5">
          <span className="footer-span">Contact</span>
          <p>120/7 Seddon Park Auckland Newzland</p>
          <p>email@gmail.com</p>
          <p>022-334628746</p>
          <span className="footer-span-logo">
            Follow us:
            <div className="footer-span-div">
              <div>
                <FacebookIcon />
              </div>
              <div>
                <InstagramIcon />
              </div>
              <div>
                <TwitterIcon />
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
