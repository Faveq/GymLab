import React from "react";
import "../Styles/HomePageStyles/HomePage.css";
import BannerSection from "../Components/HomePageComponents/BannerSection.js";
import Tile from "../Components/HomePageComponents/Tile.js";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DiscountIcon from '@mui/icons-material/Discount';
import AboutUs from "../Components/AboutPageComponents/AboutUs.js";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <div className="tiles">
        <Tile icon={<PersonPinIcon/>} title="Trainers" description="Best trainers in the area"/>
        <Tile icon={<FitnessCenterIcon/>} title="Training" description="Fully personalized training program"/>
        <Tile icon={<DiscountIcon/>} title="Prices" description="Most competitive prices"/>
      </div>
      <AboutUs/>

    </div>
  );
};
export default HomePage;
