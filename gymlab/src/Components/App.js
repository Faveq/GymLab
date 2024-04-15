import MainPage from "../Pages/HomePage";
import { useState, useEffect, useRef } from "react";
import MembershipPage from "../Pages/MembershipPage";
import TrainersPage from "../Pages/TrainersPage";
import AboutPage from "../Pages/AboutPage";
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Link,NavLink, Routes } from "react-router-dom";
import NavProfile from "./NavProfile";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const navigationRef = useRef(null);
  
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const fadingNavAfterScroll = () =>{
    var scrollPosition = window.scrollY;
    var opacity = 1
    
    if ((100 - scrollPosition/10)/100 > .8) {
      opacity = (100 - scrollPosition/10)/100;
      navigationRef.current.style.opacity = opacity
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fadingNavAfterScroll);
    return () => {
    window.removeEventListener("scroll", fadingNavAfterScroll)  
    };
  }, []);

  return (
    <div className="App" style={{ opacity: 1 }}>
      <Router>
        <nav ref={navigationRef}>
          <Link to="/">
            <div className="logoContainer">
              <img
                className="logoImage"
                src={process.env.PUBLIC_URL + "/Images/logo.png"}
              />
            </div>
          </Link>
          <div className="navLinks">
            <NavLink exact to="/" activeClassName="active">
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/schedule" activeClassName="active">
              <h2>Schedule</h2>
            </NavLink>
            <NavLink to="/membership" activeClassName="active">
              <h2>Membership</h2>
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              <h2>About</h2>
            </NavLink>
            <NavLink to="/trainers" activeClassName="active">
              <h2>Trainers</h2>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              <h2>Contact</h2>
            </NavLink>
            <MenuIcon className="menuButton" onClick={() => toggleSideNav()} />
          </div>
          <NavProfile />
        </nav>
        <SideNav toggleSideNav={toggleSideNav} showSideNav={showSideNav} />
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
