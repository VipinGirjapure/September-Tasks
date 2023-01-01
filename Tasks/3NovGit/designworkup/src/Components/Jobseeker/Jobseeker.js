import React from "react";
import "./Jobseeker.css";
import StarIcon from "@mui/icons-material/Star";

export default function Jobseeker() {
  return (
    <>
      <div className="jobseeker-section">
        <div className="jobseeker-data">
          <span className="jobseeker-says">What Jobseeker Say</span>
          <span className="jobseeker-data-child">
            Read and understand what job seekers are saying about our platform
            and then you can realise the need
          </span>
        </div>
        <div className="jobseeker-cards-div">
          <div className="jobseeker-card">
            <div className="jobseeker-card-row1">
              <div className="jobseeker-images"></div>
              <div className="jobseeker-tend">
                <span>Tend Boult</span>
                <span className="jobseeker-designer">Designer</span>
                <span>
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                </span>
              </div>
            </div>

            <div className="jobseeker-card-row2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>

          <div className="jobseeker-card">
            <div className="jobseeker-card-row1">
              <div className="jobseeker-images"></div>
              <div className="jobseeker-tend">
                <span>Tend Boult</span>
                <span className="jobseeker-designer">Designer</span>
                <span>
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                </span>
              </div>
            </div>

            <div className="jobseeker-card-row2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>

          <div className="jobseeker-card">
            <div className="jobseeker-card-row1">
              <div className="jobseeker-images"></div>
              <div className="jobseeker-tend">
                <span>Tend Boult</span>
                <span className="jobseeker-designer">Designer</span>
                <span>
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                  <StarIcon className="yellow-star" />
                </span>
              </div>
            </div>

            <div className="jobseeker-card-row2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
