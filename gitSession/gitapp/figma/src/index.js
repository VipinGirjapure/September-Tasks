import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import TopSection from "./Components/TopSection";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";
import Courses from "./Components/Courses/Courses";
import BoxTwo from "./Components/Box2/BoxTwo";
import BoxThree from "./Components/BoxThree/BoxThree";
import Teachers from "./Components/Teacher/Teachers";
import Form from "./Components/Form/Form";
// import Teacher from "./Components/Teachers/OurTeachersProfile";
import OurTeachersProfile from "./Components/Teachers/OurTeachersProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TopSection />
    <BoxTwo />
    <BoxThree />
    <Courses />
    <Teachers />
    <OurTeachersProfile/>
    <Testimonial />
    <Form/>
    <Footer />
  </>
);
