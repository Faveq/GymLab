import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../Styles/SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

const SideNav = (props) => {
  const { toggleSideNav, showSideNav } = props;

  return (
    <div className={showSideNav ? "sideNav slide" : "sideNav"}>
      <NavLink exact to="/" activeClassName="active" onClick={toggleSideNav}>
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/schedule" activeClassName="active" onClick={toggleSideNav}>
              <h2>Schedule</h2>
            </NavLink>
            <NavLink to="/membership" activeClassName="active" onClick={toggleSideNav}>
              <h2>Membership</h2>
            </NavLink>
            <NavLink to="/about" activeClassName="active" onClick={toggleSideNav}>
              <h2>About</h2>
            </NavLink>
            <NavLink to="/trainers" activeClassName="active" onClick={toggleSideNav}>
              <h2>Trainers</h2>
            </NavLink>
            <NavLink to="/contact" activeClassName="active" onClick={toggleSideNav}>
              <h2>Contact</h2>
            </NavLink>

      <CloseIcon className="closeButton" onClick={()=>toggleSideNav()} />
    </div>
  );
};
export default SideNav;
