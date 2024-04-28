import React from "react";
import "../../Styles/HomePageStyles/Trainers.css";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  return (
    <div className="trainersSection">
      <h1 className="sectionHeading">Who will you train with?</h1>
      <p>Meet our staff that will lead you to the peak of your abilities</p>
      <div className="trainersContainer">
        <TrainerCard name="Roy Ellis" description="Personal trainer" photoPath="trainer1.png"/>
        <TrainerCard name="Hal Parish" description="Swimming champion" photoPath="trainer2.png"/>
        <TrainerCard name="Aida Jennings" description="Yoga professionalist" photoPath="trainer3.png"/>
      </div>
    </div>
  );
};

export default Trainers;
