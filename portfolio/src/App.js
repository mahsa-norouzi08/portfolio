import "./App.css";
// import Header from "./components/header";
// import AboutMe from "./components/aboutme";
// import Education from "./components/education";
// import Card from "./components/card";
// import Javascript from "./static/java.svg";
// import Html from "./static/html.png";
// import Experience from "./components/workexperience";
import Navbar from "./pages/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import AboutMe from "./pages/aboutme";
import Experience from "./pages/expereince";
import Skill from "./pages/skills";
import Education from "./pages/edu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path='/skills' element={<Skill/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path='/edu' element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
