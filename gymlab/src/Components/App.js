import MainPage from "../Pages/HomePage";
import { useState } from "react";
import MembershipPage from "../Pages/MembershipPage";
import TrainersPage from "../Pages/TrainersPage";
import AboutPage from "../Pages/AboutPage";
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavProfile from "./NavProfile";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">
            <div className="logoContainer">
              <img
                className="logoImage"
                src={process.env.PUBLIC_URL + "/Images/logo.png"}
              />
            </div>
          </Link>
          <div className="navLinks">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/schedule">
              <h2>Schedule</h2>
            </Link>
            <Link to="/membership">
              <h2>Membership</h2>
            </Link>
            <Link to="/about">
              <h2>About</h2>
            </Link>
            <Link to="/trainers">
              <h2>Trainers</h2>
            </Link>
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
            <MenuIcon className="menuButton" onClick={()=>toggleSideNav()} />
          </div>
          <NavProfile />
        </nav>
        <SideNav toggleSideNav={toggleSideNav} showSideNav={showSideNav}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
