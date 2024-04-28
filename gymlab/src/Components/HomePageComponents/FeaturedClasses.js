import React from "react";
import "../../Styles/HomePageStyles/FeaturedClasses.css";
import Tile from "./Tile";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import TerrainIcon from "@mui/icons-material/Terrain";

const FeaturedClasses = () => {
  return (
    <div className="featuredClasses">
      <h1 className="sectionHeading">Featured classes</h1>
      <div className="featuredClassesContainer">
        <Tile
          title="Running"
          description="Mon 13:00-15:00 <br /> Fri 18:00-20:00"
          icon={<DirectionsRunIcon />}
          backgroundImg={"Images/treadmill.jpg"}
        />
        <Tile
          title="Yoga"
          description="Tue 11:00-13:30 <br /> Fri 15:00-17:30"
          icon={<SelfImprovementIcon />}
          backgroundImg={"Images/yoga.jpg"}
        />
        <Tile
          title="Bench press"
          description="Mon 7:00-9:00 <br /> Thu 19:00-22:00"
          icon={<FitnessCenterIcon />}
          backgroundImg={"Images/bench.jpg"}
        />
        <Tile
          title="Swimming"
          description="Sun 16:00-17:30 <br /> Wed 7:00-8:30"
          icon={<PoolIcon />}
          backgroundImg={"Images/swimming.jpg"}
        />
        <Tile
          title="Climbing"
          description="Tue 10:00-12:00<br /> Sat 8:00-10:00"
          icon={<TerrainIcon />}
          backgroundImg={"Images/climbing.jpg"}
        />
      </div>
    </div>
  );
};

export default FeaturedClasses;
