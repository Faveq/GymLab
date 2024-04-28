import React from "react";
import "../../Styles/HomePageStyles/TrainerCard.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const TrainerCard = (props) => {
  const { name, description, photoPath } = props;

  return (
    <div className="trainerCard">
      <img className="trainerPhoto" src={process.env.PUBLIC_URL + "/Images/" + photoPath} alt={name}  style={{backgroundImage: 'url("Images/trainerBg.png")'}}/>
      <div className="trainerCardBody">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="mediaLinks">
        <FacebookIcon/>
        <XIcon/>
        <InstagramIcon/>
      </div>
      </div>
    </div>
  );
};

export default TrainerCard;
