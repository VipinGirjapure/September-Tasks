import { Component } from "react";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import "./BoxTwo.css";
// import { ImportContactsOutlined } from "@mui/icons-material";
class BoxTwo extends Component {
  render() {
    return (
      <>
        <div className="vipin-box-page">
          <div className="vipin-box-container">
            <div className="vipin-left-box">
              <div>
                
              </div>
              <div className="vipin-left-box-item">
                <div
                  className="vipin-left-box-item-img"
                  style={{ backgroundColor: "lightsalmon" }}
                >
                  <DesktopWindowsIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "5px",
                  }}
                >
                  <div className="vipin-left-box-item-heading">Live Class</div>
                  <div className="vipin-left-box-item-description">
                    Online class regularly
                  </div>
                </div>
              </div>
              <div className="vipin-left-box-item">
                <div
                  className="vipin-left-box-item-img"
                  style={{ backgroundColor: "lightpink" }}
                >
                  <ChatOutlinedIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "5px",
                  }}
                >
                  <div className="vipin-left-box-item-heading">
                    Live Discussion
                  </div>
                  <div className="vipin-left-box-item-description">
                    Online live discussion
                  </div>
                </div>
              </div>

              <div className="vipin-left-box-item">
                <div
                  className="vipin-left-box-item-img"
                  style={{ backgroundColor: "lightblue" }}
                >
                  <NoteAddOutlinedIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "5px",
                  }}
                >
                  <div className="vipin-left-box-item-heading"> Daily Task</div>
                  <div className="vipin-left-box-item-description">
                    Online daily homework
                  </div>
                </div>
              </div>
              <div className="vipin-left-box-item">
                <div
                  className="vipin-left-box-item-img"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  <ImportContactsOutlinedIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginLeft: "5px",
                  }}
                >
                  <div className="vipin-left-box-item-heading">Subjects</div>
                  <div className="vipin-left-box-item-description">
                    Various kind of subject
                  </div>
                </div>
              </div>
            </div>
            <div className="vipin-right-box">
              <div className="vipin-right-box-text1">Membership</div>
              <div className="vipin-right-box-heading-text">
                Start your learning journey today !
              </div>
              <div className="vipin-right-box-description">
                A best and cheapest way of getting know learning to make a
                better tomorrow
              </div>
              <button className="vipin-right-box-button">Sign up</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BoxTwo;
