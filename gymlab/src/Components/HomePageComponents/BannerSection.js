import React from "react";
import "../../Styles/HomePageStyles/BannerSection.css"
import Quote from "./Quote";
import Share from "./Share";

const BannerSection = () => {
  return <div className="bannerSection" style={{backgroundImage: 'url("Images/banner.jpg")'}}>
      <Quote/>
      <Share/>
    </div>
};

export default BannerSection;
