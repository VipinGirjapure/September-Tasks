import React from "react";
import { AiOutlineLogin, AiOutlineLogout, AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import "./index.css";

const TopSection = () => {
  return (
    <>
      <div className="top-div">
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li className="nav-li-main">Upskill</li>
            <li className="nav-li home">Home</li>
            <li className="nav-li">Courses</li>
            <li className="nav-li">Benifits</li>
            <li className="nav-li">Contacts</li>
          </ul>
          <GiHamburgerMenu className="ham-menu" color="white" size={25} />
          <AiOutlineLogin className="ham-menu" color="white" size={25} />
          <AiOutlineLogout className="ham-menu" color="white" size={25} />
          <div className="buttons">
            <button className="login">Login</button>
            <button className="signup">Sign up</button>
          </div>
        </nav>
        <div className="mid-div">
          <div className="text-div">
            <p className="simple-p">Simple eLearning Platform.</p>
            <h1 className="head-text">
              Our only <br /> concern is your <br /> education
            </h1>
          </div>
          <p className="get-p">Get Started</p>

          <div className="card-div">
            <img
              src="https://res.cloudinary.com/dkwefqjnn/image/upload/v1667378748/file-0-1624736053118_mie1t9.png"
              alt="ui"
              className="ui-img"
            />
            <div className="card-content">
              <p className="card-head">UI/UX Design</p>
              <p className="res-p">Reserve Price</p>
              <div className="price-ratings">
                <p className="price-p">$50.24</p>
                <h4 className="mid-p">4.5</h4>
                <AiFillStar color="gold" size={12} />
                <AiFillStar color="gold" size={12} />
                <AiFillStar color="gold" size={12} />
                <AiFillStar color="gold" size={12} />
                <AiFillStar
                  color="grey"
                  size={12}
                  style={{ marginRight: "3px" }}
                />
                <h4 className="reviews-p">(4,520)</h4>
              </div>
              <div className="card-btns">
                <button className="card-btn1">Enroll course</button>
                <button className="card-btn2">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="end-div">
          <div className="div-one">
            <p className="num">01</p>
            <div className="text-end">
              <p className="p-one">Get certificates from us.</p>
              <p className="p-two">
                We are providing a certificates to you after completing any
                course or subjects.
              </p>
            </div>
          </div>

          <div className="div-one">
            <p className="num">01</p>
            <div className="text-end">
              <p className="p-one">Become a teacher of our platform.</p>
              <p className="p-two">
                We are giving you to become a teacher after completing your
                course and you can join freely.
              </p>
            </div>
          </div>

          <div className="mentor-div">
            <img
              alt="mentor"
              src="https://res.cloudinary.com/dkwefqjnn/image/upload/v1667384713/Why-Teacher-Performance-Evaluations-Are-Important-removebg-preview-removebg-preview_geegnm.png"
              className="mentor"
            />
            <p className="mentor-p">What our Mentor Say</p>
            <p className="mentor-icon">
              <BsFillPlayFill />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
