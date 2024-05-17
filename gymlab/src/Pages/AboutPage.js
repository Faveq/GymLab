import React from "react";
import SmallBanner from "../Components/SmallBanner";
import AboutUs from "../Components/AboutPageComponents/AboutUs";
import "../Styles/AboutUsPageStyles/AboutUsPage.css"

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <SmallBanner title="About"/>
      <AboutUs/>
    </div>
  );
};
export default AboutPage;
