
import './App.css';
import Card from './components/card';
import Header from './components/header';
import AboutMe from './components/aboutme';

function App() {
  const flash = ">"
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
