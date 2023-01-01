import { Component } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import "./BoxThree.css";
class BoxThree extends Component {
  render() {
    return (
      <>
        <div className="vipin-Box-three-page">
          <div className="vipin-box-three-container">
            <div className="vipin-box-three-item1">
              <div className="vipin-box-three-item1-sub-heading">
                Browse Categories
              </div>
              <div className="vipin-box-three-item1-heading">
                Popular topic to learn
              </div>
              <div className="vipin-box-three-item1-text">
                A best and cheapest way of getting know learning to make a
                better tomorrow
              </div>
            </div>
            <div className="vipin-box-three-item2">
              <div className="vipin-box-three-item2-icon">
                <ArrowBackOutlinedIcon />
              </div>
              <div className="vipin-box-three-item2-card">
                <div
                  className="vipin-box-three-item2-card-icon"
                  style={{
                    fontSize: "75px",
                    color: "salmon",
                  }}
                >
                  <DesignServicesOutlinedIcon />
                </div>
                <div className="vipin-box-three-item2-card-heading">
                  Design Sector
                </div>
                <div className="vipin-box-three-item2-card-sub-heading">
                  5 course
                </div>
              </div>
              <div className="vipin-box-three-item2-card">
                <div className="vipin-box-three-item2-card-icon" style={{
                    fontSize:"75px"
                    ,color:"cyan"
                }}
                >
                  <DesktopMacOutlinedIcon />
                </div>
                <div className="vipin-box-three-item2-card-heading">
                  Devlopment Sector
                </div>
                <div className="vipin-box-three-item2-card-sub-heading">
                  4 course
                </div>
              </div>
              <div className="vipin-box-three-item2-card">
                <div className="vipin-box-three-item2-card-icon" style={{
                    fontSize:"75px"
                    ,color:"orange"
                }}>
                  <CampaignOutlinedIcon />
                </div>
                <div className="vipin-box-three-item2-card-heading">
                  Marketing Sector
                </div>
                <div className="vipin-box-three-item2-card-sub-heading">
                  3 course
                </div>
              </div>
              <div className="vipin-box-three-item2-card">
                <div
                  className="vipin-box-three-item2-card-icon"
                  style={{
                    fontSize: "69px",
                    color: "violet",
                  }}
                >
                  <MovieOutlinedIcon />
                </div>
                <div className="vipin-box-three-item2-card-heading">
                  Videography Sector
                </div>
                <div className="vipin-box-three-item2-card-sub-heading">
                  2 course
                </div>
              </div>
              <div className="vipin-box-three-item2-icon">
                <ArrowForwardOutlinedIcon />{" "}
              </div>
            </div>
            <div className="vipin-box-three-item3">
              <button className="vipin-left-box-button">Browse All</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BoxThree;
