import React, { useEffect } from "react";
import SmallBanner from "../Components/SmallBanner";
import AboutUs from "../Components/AboutPageComponents/AboutUs";
import "../Styles/AboutUsPageStyles/AboutUsPage.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutPage">
      <SmallBanner title="About" />
      <AboutUs />
    </div>
  );
};
export default AboutPage;
