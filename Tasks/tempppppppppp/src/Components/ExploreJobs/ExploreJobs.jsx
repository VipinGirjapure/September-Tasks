import { Component } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "./ExploreJobs.css";
class ExploreJobs extends Component {
  render() {
    return (
      <>
        <div className="exp-jobs-page">
          <div className="exp-jobs-comp">
            <div className="exp-jobs-comp-top-section">
              <div className="exp-jobs-heading">Explore Featured Jobs</div>
              <div className="exp-jobs-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nesciunt consectetur nemo
              </div>
            </div>
            <div className="exp-jobs-cards-container">
              <div className="exp-jobs-cards-container-row-one">
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    Web site developer dropbox
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Part Time
                    </div>
                  </div>
                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">
                      <DragIndicatorIcon />
                    </div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Dropbox
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    Back-end developer with good skill in intel
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Full Time
                    </div>
                  </div>
                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">Intel</div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Intel
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    Digital marketing manager in pepsi
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Part-Time
                    </div>
                  </div>

                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">
                      <FastfoodIcon />
                    </div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Pepsi
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-jobs-cards-container-row-one">
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    Frontend Devloper for Google
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Remote
                    </div>
                  </div>
                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">
                      <GoogleIcon />
                    </div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Google
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    UI/UX designer with wordpress experience
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Part Time
                    </div>
                  </div>
                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">
                      <AppleIcon />
                    </div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Apple
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exp-jobs-card">
                  <div className="exp-jobs-card-heading">
                    Marketing intern for exciting instagram
                  </div>
                  <div className="exp-jobs-card-section1">
                    <div>New York</div>
                    <div
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "salmon",
                        padding: "4px",
                        color: "whitesmoke",
                      }}
                    >
                      Full Time
                    </div>
                  </div>
                  <div className="exp-jobs-card-section2">
                    <div className="exp-jobs-card-img">
                      <InstagramIcon />
                    </div>
                    <div className="exp-jobs-card-img-right-box">
                      <div className="exp-jobs-card-img-right-box-heading">
                        Instagram
                      </div>
                      <div className="exp-jobs-card-img-right-box-sub-heading">
                        5 days ago{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button className="see-more-button">See More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ExploreJobs;
