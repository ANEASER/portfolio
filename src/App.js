import './App.css';
import Navbar from './component/navbar.js';
import AboutMe from './component/aboutme.js';
import TechStack from './component/techtack';
import Contact from './component/contacts';
import Sample from './component/sample';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <TechStack/>
      <Contact/>
      <Sample/>
    </div>
  );
}

export default App;
