import React from "react";
import "../Styles/HomePageStyles/HomePage.css";
import BannerSection from "../Components/HomePageComponents/BannerSection.js";
import Tile from "../Components/HomePageComponents/Tile.js";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DiscountIcon from "@mui/icons-material/Discount";
import AboutUs from "../Components/AboutPageComponents/AboutUs.js";
import PartnersSection from "../Components/HomePageComponents/PartnersSection.js";
import FeaturedClasses from "../Components/HomePageComponents/FeaturedClasses.js";
import Trainers from "../Components/HomePageComponents/Trainers.js";
import Bmi from "../Components/HomePageComponents/Bmi.js";

const HomePage = () => {
  return (
    <div className="homePageContent">
      <BannerSection />
      <div>
        <div className="tiles">
          <Tile
            icon={<PersonPinIcon />}
            title="Trainers"
            description="Best trainers in the area"
          />
          <Tile
            icon={<FitnessCenterIcon />}
            title="Training"
            description="Fully personalized training program"
          />
          <Tile
            icon={<DiscountIcon />}
            title="Prices"
            description="Most competitive prices"
          />
        </div>
        <AboutUs />
      </div>
      <PartnersSection />
      <FeaturedClasses />
      <Trainers />
      <Bmi />
    </div>
  );
};
export default HomePage;
