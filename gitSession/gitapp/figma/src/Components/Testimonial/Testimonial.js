import "./Testimonial.css";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Testimonial() {
  return (
    <div className="Testimonial-div">
      <div className="Testimonial-data">
        <div className="Testimonial-data-header">
          <span className="Membership-heading"> Membership</span>
          <span className="Student-heading">What Student says</span>
          <span className="Student-para">
            <div>
              Company si s simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          </span>
        </div>
        <div className="Testimonial-data-symbol">
          <div className="Testimonial-symbol-flex">
            <EastIcon className="white" />
            <KeyboardBackspaceIcon className="white" />
          </div>
        </div>
      </div>
      <div className="Testimonial-cards">
        <div className="Testimonial-card">
          <div className="Testimonial-Symbols-div">
            <div className="Testimonial-Symbols"></div>
          </div>

          <div>
            Company si s simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="div-image"></div>
          <div>Name</div>
          <div>Web Student</div>
        </div>

        <div className="Testimonial-card">
          <div className="Testimonial-Symbols-div">
            <div className="Testimonial-Symbols"></div>
          </div>
          <div>
            Company si s simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="div-image2"></div>
          <div>Name</div>
          <div>Web Student</div>
        </div>

        <div className="Testimonial-card">
          <div className="Testimonial-Symbols-div">
            <div className="Testimonial-Symbols"></div>
          </div>
          <div>
            Company si s simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>

          <div className="div-image3"></div>
          <div>Name</div>
          <div>Web Student</div>
        </div>
      </div>
    </div>
  );
}
