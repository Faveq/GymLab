import React from "react";
import "../Styles/NavProfile.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const NavProfile = () => {
  return <div className="NavProfileContainer">
    <AccountCircleIcon className="profileIcon"/>
    <div className="navJoinContainer">
        <Link to="/membership" className="navJoinButton"><AddIcon className="navJoinButtonIcon"/></Link>
        <h4 className="navJoinHeading">JOIN CLASS NOW</h4>
    </div>
  </div>;
};

export default NavProfile;
