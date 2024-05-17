import MainPage from "../Pages/HomePage";
import { useState, useEffect, useRef } from "react";
import MembershipPage from "../Pages/MembershipPage";
import AboutPage from "../Pages/AboutPage";
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Link,NavLink, Routes } from "react-router-dom";
import NavProfile from "./NavProfile";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";
import Footer from "./Footer";
import SchedulePage from "../Pages/SchedulePage";
import ContactPage from "../Pages/ContactPage";

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
                alt="Logo"
              />
            </div>
          </Link>
          <div className="navLinks">
            <NavLink exact to="/GymLab/" className={(navData) => navData.isActive ? "active" : null }>
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/GymLab/schedule" className={(navData) => navData.isActive ? "active" : null }>
              <h2>Schedule</h2>
            </NavLink>
            <NavLink to="/GymLab/membership" className={(navData) => navData.isActive ? "active" : null }>
              <h2>Membership</h2>
            </NavLink>
            <NavLink to="/GymLab/about" className={(navData) => navData.isActive ? "active" : null }>
              <h2>About</h2>
            </NavLink>
            <NavLink to="/GymLab/contact" className={(navData) => navData.isActive ? "active" : null }>
              <h2>Contact</h2>
            </NavLink>
            <MenuIcon className="menuButton" onClick={() => toggleSideNav()} />
          </div>
          <NavProfile />
        </nav> 
      <SideNav toggleSideNav={toggleSideNav} showSideNav={showSideNav} />

        <Routes>
          <Route path="/GymLab/" element={<MainPage />} />
          <Route path="/GymLab/schedule" element={<SchedulePage />} />
          <Route path="/GymLab/membership" element={<MembershipPage />} />
          <Route path="/GymLab/about" element={<AboutPage />} />
          <Route path="/GymLab/contact" element={<ContactPage />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
