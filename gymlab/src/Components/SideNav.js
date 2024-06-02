import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

const SideNav = (props) => {
  const { toggleSideNav, showSideNav } = props;

  return (
    <div className={showSideNav ? "sideNav slide" : "sideNav"}>
      <NavLink exact to="/GymLab/" activeClassName="active" onClick={toggleSideNav}>
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/GymLab/schedule" activeClassName="active" onClick={toggleSideNav}>
              <h2>Schedule</h2>
            </NavLink>
            <NavLink to="/GymLab/membership" activeClassName="active" onClick={toggleSideNav}>
              <h2>Membership</h2>
            </NavLink>
            <NavLink to="/GymLab/about" activeClassName="active" onClick={toggleSideNav}>
              <h2>About</h2>
            </NavLink>
            <NavLink to="/GymLab/contact" activeClassName="active" onClick={toggleSideNav}>
              <h2>Contact</h2>
            </NavLink>

      <CloseIcon className="closeButton" onClick={()=>toggleSideNav()} />
    </div>
  );
};
export default SideNav;
