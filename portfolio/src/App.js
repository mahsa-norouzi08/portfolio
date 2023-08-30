import "./App.css";
// import Header from "./components/header";
// import AboutMe from "./components/aboutme";
// import Education from "./components/education";
// import Card from "./components/card";
// import Javascript from "./static/java.svg";
// import Html from "./static/html.png";
// import Experience from "./components/workexperience";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import AboutMe from './pages/aboutme';
// import ContactMe from "./pages/contactme";


function App() {
  const flash = ">";
  return (
    <div className="App">
      {/* <div>
        <Header />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <div className="titlediv">
          <h1 id="colorskill" className="title-edu">
            SKILLS
          </h1>
        </div>
        <Card img={Javascript} alt={"javascript"} description={"Javascript"} />
        <Card img={Html} alt={"html"} description={"Html"} />
        <Card img={Html} alt={"html"} description={"Html"} />
        <Card img={Html} alt={"html"} description={"Html"} />
        <Card img={Html} alt={"html"} description={"Html"} />
      </div>
      <div>
        <Experience />
      </div> */}
      {/* <div>
        <RecipeReviewCard />
      </div> */}
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/aboutme'element={<AboutMe />} />
                {/* <Route path='/contactme' element={<ContactMe />} /> */}
                {/* <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
