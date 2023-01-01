import React from "react";
import "./ReadBlog.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ReadBlog() {
  return (
    <>
      <div className="jobseeker-section">
        <div className="jobseeker-data">
          <span className="jobseeker-says">Read our Blog</span>
          <span className="jobseeker-data-child">
            Read and understand what job seekers are saying about our platform
            and then you can realise the need
          </span>
        </div>
        <div className="jobseeker-cards-div">
          <div className="jobseeker-card">
            <div className="blog-card-row1"></div>
            <div className="blog-card-row2">
              <span className="blog-heading">Handle the Work</span>
              <span className="blog-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="blog-card-row3">
              Read More <ArrowForwardIcon />
            </div>
          </div>

          <div className="jobseeker-card">
            <div className="blog-card-row1"></div>
            <div className="blog-card-row2">
              <span className="blog-heading">Handle the Work</span>
              <span className="blog-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="blog-card-row3">
              Read More <ArrowForwardIcon />
            </div>
          </div>

          <div className="jobseeker-card">
            <div className="blog-card-row1"></div>
            <div className="blog-card-row2">
              <span className="blog-heading">Handle the Work</span>
              <span className="blog-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="blog-card-row3">
              Read More <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
