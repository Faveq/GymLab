import MainPage from "../Pages/HomePage";
import MembershipPage from "../Pages/MembershipPage";
import TrainersPage from "../Pages/TrainersPage";
import AboutPage from "../Pages/AboutPage";
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavProfile from "./NavProfile";

function App() {
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
              <h2>HOME</h2>
            </Link>
            <Link to="/membership">
              <h2>MEMBERSHIP</h2>
            </Link>
            <Link to="/about">
              <h2>ABOUT</h2>
            </Link>
            <Link to="/trainers">
              <h2>TRAINERS</h2>
            </Link>
          </div>
          <NavProfile/>
        </nav>
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
