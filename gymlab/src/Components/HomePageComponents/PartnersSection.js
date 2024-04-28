import React from "react";
import "../../Styles/HomePageStyles/PartnersSection.css";

const PartnersSection = () => {
  return (
    <div className="partnersContainer">
      <img
        src={process.env.PUBLIC_URL + "/Images/partner2.png"}
        alt="Fitness"
        className="partnerLogo"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/partner1.png"}
        alt="Gym Fitness Center"
        className="partnerLogo"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/partner3.png"}
        alt="Fitness"
        className="partnerLogo"
      />
    </div>
  );
};

export default PartnersSection;
