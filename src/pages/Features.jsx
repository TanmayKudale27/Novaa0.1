import React from "react";
import "aos/dist/aos.css";
import "../css/Features.css";

import {
  BsEye, BsInfinity, BsMortarboard, BsStar,
  BsXDiamond, BsCameraVideo, BsBrightnessHigh, BsActivity
} from "react-icons/bs";

const iconData = [
  { icon: <BsEye style={{ color: "#ff8b2c" }} />, text: "Easy Cart Features" },
  { icon: <BsInfinity style={{ color: "#5578ff" }} />, text: "Sit amet consectetur adipisicing" },
  { icon: <BsMortarboard style={{ color: "#e80368" }} />, text: "Ipsum Rerum Explicabo" },
  { icon: <BsStar style={{ color: "#ffa76e" }} />, text: "Easy Cart Features" },
  { icon: <BsXDiamond style={{ color: "#11dbcf" }} />, text: "Easy Cart Features" },
  { icon: <BsCameraVideo style={{ color: "#4233ff" }} />, text: "Sit amet consectetur adipisicing" },
  { icon: <BsBrightnessHigh style={{ color: "#29cc61" }} />, text: "Ipsum Rerum Explicabo" },
  { icon: <BsActivity style={{ color: "#ff5828" }} />, text: "Easy Cart Features" },
];

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-0">Powerful Features for</h3>
            <h3>Your Business</h3>

            <div className="row gy-4 mt-3">
              {iconData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="icon-list d-flex align-items-center">
                    {item.icon}
                    <span className="ms-2">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="col-lg-5 position-relative" data-aos="zoom-out" data-aos-delay="200">
            <div className="phone-wrap">
              <img src="src/assets/img/iphone.png" alt="Phone" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>


      <div className="details mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <h4>Labore Sdio Lidui<br />Bonde Naruto</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
                nostrum molestias doloremque quae delectus odit minima corrupti
                blanditiis quo animi!
              </p>
              <a href="#about" className="btn-get-started btn btn-primary mt-3">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
