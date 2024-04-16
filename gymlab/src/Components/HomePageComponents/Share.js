import React from "react";
import "../../Styles/HomePageStyles/Share.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Share = () => {
  return <div className="shareContainer">
    <h3 className="shareHeading">SHARE</h3>
    <div className="verticalLine"></div>
    <FacebookIcon className="mediaIcon"/>
    <XIcon className="mediaIcon"/>
    <InstagramIcon className="mediaIcon"/>
    
    </div>
};

export default Share;
