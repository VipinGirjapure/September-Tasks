import { Component } from "react";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./UnleashTechnology.css";
class UnleashTechnology extends Component {
  render() {
    return (
      <>
        <div className="unleash-page">
          <div className="unleash-container">
            <div className="unleash-container-item1">
              <div className="unleash-container-sub-item1">
                <div className="unleash-heading">
                  Unleash the power of latest Technologies.
                </div>
              </div>
              <div className="unleash-container-sub-item2">
                <div className="unleashText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
                <div className="unleash-showall">
                  Show All <ArrowRightAltIcon />
                </div>
              </div>
            </div>
            <div className="unleash-container-item2">
              <div className="unleash-container-item2-card">
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "lightblue",
                  }}
                >
                  <ShieldRoundedIcon />
                </div>
                <div className="unleash-container-item2-card-heading">
                  Feature you find
                </div>
                <div className="unleash-container-item2-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                </div>
              </div>
              <div className="unleash-container-item2-card">
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "lightsalmon",
                  }}
                >
                  <PersonRoundedIcon />
                </div>
                <div className="unleash-container-item2-card-heading">
                  Feature you find
                </div>
                <div className="unleash-container-item2-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et,Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="unleash-container-item2-card">
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "#a28cd4",
                  }}
                >
                  <DesktopMacIcon />
                </div>
                <div className="unleash-container-item2-card-heading">
                  Feature you find
                </div>
                <div className="unleash-container-item2-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UnleashTechnology;
