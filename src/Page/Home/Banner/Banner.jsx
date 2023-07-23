import React from "react";
import mainimg from "../../../../public/students-sitting-stairs-gesturing-two-fingers-looking-camera.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div data-aos="zoom-in">
          {" "}
          <img id="slide" src={mainimg} alt="" />
        </div>
        <div className="absolute hidden md:block bg-black top-[400px] right-[350px] rounded  z-40 p-[120px] bg-opacity-60 ">
          <h1 className="text-5xl text-white">
            Welcome to <span className="text-orange-500">Collage graduate</span>{" "}
            web site
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
