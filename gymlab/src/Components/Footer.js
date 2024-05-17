import React from "react";
import "../Styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="privacyPolicyContainer">
      <img className="trainerPhoto" src={process.env.PUBLIC_URL + "/Images/logo.png"} alt="logo" />
      <p>Elevate your health and fitness with our all-inclusive program tailored to help you achieve your wellness objectives.</p>
      <div className="socials">
        <FacebookIcon/>
        <XIcon/>
        <InstagramIcon/>
      </div>
      <p>Privacy Policy | © 2024 GymLab</p>
      </div>
      <div className="generalInfoContainer">
        <div className="classesContainer">
          <h2>Our Classes</h2>
          <p>Running</p>
          <p>Yoga</p>
          <p>Bench press</p>
          <p>Swimming</p>
          <p>Climbing</p>
        </div>
        <div className="workingHours">
        <h2>Working Hours</h2>
          <h3>Monday - Friday:</h3>
          <p>5:00am - 10:00pm</p>
          <h3>Saturday:</h3>
          <p>6:00am - 9:00pm</p>
          <h3>Sunday:</h3>
          <p>Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
