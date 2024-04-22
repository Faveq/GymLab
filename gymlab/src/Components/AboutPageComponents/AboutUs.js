import React from "react";
import "../../Styles/AboutUsPageStyles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1 className="sectionHeading">Our history</h1>
      <div className="ourHistory">
        <p>
          From ancient gymnasiums to modern fitness centers, our gym has evolved
          alongside the pursuit of strength and health throughout history. We're
          here to empower you on your fitness journey, providing a supportive
          environment where you can surpass your limits and embrace a healthier
          lifestyle. Join us and redefine your fitness journey today!
        </p>
        <div  className="imageContainer">
        <img
          src={process.env.PUBLIC_URL + "/Images/powerlifter.png"}
          alt="Powerlifter"
        />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
