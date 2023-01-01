import { Component } from "react";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DevicesIcon from '@mui/icons-material/Devices';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./UnlimitedTransformation.css";
class UnlimitedTransformation extends Component {
  render() {
    return (
      <>
        <div className="unleash-page">
          <div className="unleash-container">
            <div className="unleash-container-item1">
              <div className="unleash-container-sub-item1">
                <div className="unleash-heading">
           Unlimited transformation powered by the fastest
                </div>
              </div>
              <div className="unleash-container-sub-item2">
                <div className="unleashText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
                <div className="unleash-showall">
                  Show All < ArrowRightAltIcon/>
                </div>
              </div>
            </div>
            <div className="unleash-container-item2">
              <div className="unleash-container-item2-card" style={{backgroundColor:"#ecf9ff"}}>
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "#01c2ff",
                  }}
                >
                  <SettingsSuggestIcon />
                </div>
                <div className="unleash-container-item2-card-heading">
                 Real time constomization
                </div>
                <div className="unleash-container-item2-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                </div>
              </div>
              <div className="unleash-container-item2-card" style={{backgroundColor:"#feefe7"}}>
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "#ff8d4d",
                  }}
                >
                  <DevicesIcon />
                </div>
                <div className="unleash-container-item2-card-heading">
               Fully Responsive
                </div>
                <div className="unleash-container-item2-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et,Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="unleash-container-item2-card" style={{backgroundColor:"#f4edff"}}>
                <div
                  className="unleash-container-item2-card-img"
                  style={{
                    backgroundColor: "#a28cd4",
                  }}
                >
                  <ColorLensIcon />
                </div>
                <div className="unleash-container-item2-card-heading" >
                  Easy Color Change
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
export default UnlimitedTransformation;
