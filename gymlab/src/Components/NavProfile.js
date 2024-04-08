import React from "react";
import "../Styles/NavProfile.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';

const NavProfile = () => {
  return <div className="NavProfileContainer">
    <AccountCircleIcon className="profileIcon"/>
    <div className="navJoinContainer">
        <button className="navJoinButton"><AddIcon className="navJoinButtonIcon"/></button>
        <h4 className="navJoinHeading">JOIN CLASS NOW</h4>
    </div>
  </div>;
};

export default NavProfile;
