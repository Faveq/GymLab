import MainPage from "../Pages/HomePage";
import MembershipPage from "../Pages/MembershipPage";
import TrainersPage from "../Pages/TrainersPage";
import AboutPage from "../Pages/AboutPage"
import "../Styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to="/gymlab">
          <h2>HOME</h2>
        </Link>
        <Link to="/gymlab/membership">
          <h2>MEMBERSHIP</h2>
        </Link>
        <Link to="/gymlab/about">
          <h2>ABOUT</h2>
        </Link>
        <Link to="/gymlab/trainers">
          <h2>TRAINERS</h2>
        </Link>
        </nav>
        <Routes>
          <Route path="/gymlab" element={<MainPage />} />
          <Route path="/gymlab/membership" element={<MembershipPage />} />
          <Route path="/gymlab/about" element={<AboutPage />} />
          <Route path="/gymlab/trainers" element={<TrainersPage />} />
        </Routes>
        <h2>test</h2>
        
      </Router>
    </div>
  );
}

export default App;
