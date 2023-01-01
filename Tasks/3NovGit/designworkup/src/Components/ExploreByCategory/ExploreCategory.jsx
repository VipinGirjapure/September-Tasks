import { Component } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import "./ExploreCategory.css";
class ExploreCategory extends Component {
  render() {
    return (
      <>
        <div className="exp-category-page">
          <div className="exp-category-comp">
            <div className="exp-category-comp-top-section">
              <div className="exp-category-heading">Explore By Category</div>
              <div className="exp-category-text">
                Explore all the category by category and find your perfect and
                suitable job that you badly need
              </div>
            </div>
            <div className="exp-category-cards-container">
              <div className="exp-category-cards-container-row-one">
                <div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DesignServicesIcon />
                  </div>
                  <div className="exp-category-card-heading">
                    Design & Development
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      15k Post Jobs{" "}
                    </div>

                   
                  </div>
                </div>
                <div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">UI/UX Design</div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      14k Post Jobs{" "}
                    </div>

                  </div>
                </div>
                <div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                    Website Design
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

                   
                  </div>
                </div>
                <div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                    Website Development
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

                 
                  </div>
                </div>
              </div>

              <div className="exp-category-cards-container-row-one">
              <div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                  Digital Marketing
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

                    <div className="exp-category-card-img-right-box"></div>
                  </div>
                </div><div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                    Digital Photographer
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

          
                  </div>
                </div><div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                  Video Animator
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

                    <div className="exp-category-card-img-right-box"></div>
                  </div>
                </div><div className="exp-category-card">
                  <div className="exp-category-card-img">
                    <DragIndicatorIcon />
                  </div>
                  <div className="exp-category-card-heading">
                Customer Support
                  </div>
                  <div className="exp-category-card-section2">
                    <div className="exp-category-card-img-right-box-sub-heading">
                      13k Post Jobs{" "}
                    </div>

                    <div className="exp-category-card-img-right-box"></div>
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
export default ExploreCategory;
