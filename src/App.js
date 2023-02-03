
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import bgImage from '../src/images/bgImage.JPG'


function App() {
  return (
    <div style={{backgroundImage: `src(${bgImage})`,
    display: 'flex',
    width: "100%",
    flexWrap: 'wrap',
    justifyContent: 'center'}}>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={< Home />} />
            <Route path="/About" element={< AboutMe />} />
            <Route path="/Projects" element={< Projects />} />
            <Route path="/Contact" element={< Contact /> } />
          </Routes>
        <Footer/>
      </Router>
    </div>
      
  );
}

export default App;
