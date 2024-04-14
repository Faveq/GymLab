import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Styles/SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

const SideNav = (props) => {
  const { toggleSideNav, showSideNav } = props;

  return (
    <div className={showSideNav ? "sideNav slide" : "sideNav"}>
      <Link to="/" onClick={()=>toggleSideNav()}>
        <h2>Home</h2>
      </Link>
      <Link to="/schedule" onClick={()=>toggleSideNav()}>
        <h2>Schedule</h2>
      </Link>
      <Link to="/membership" onClick={()=>toggleSideNav()}>
        <h2>Membership</h2>
      </Link>
      <Link to="/about" onClick={()=>toggleSideNav()}>
        <h2>About</h2>
      </Link>
      <Link to="/trainers" onClick={()=>toggleSideNav()}>
        <h2>Trainers</h2>
      </Link>
      <Link to="/contact" onClick={()=>toggleSideNav()}>
        <h2>Contact</h2>
      </Link>

      <CloseIcon className="closeButton" onClick={()=>toggleSideNav()} />
    </div>
  );
};
export default SideNav;
