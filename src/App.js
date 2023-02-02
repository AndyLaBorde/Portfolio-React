
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import bgImage from '../src/images/bgImage.JPG'
import { Col } from 'react-bootstrap';

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
            <Route exact path="/" component={< Home />} />
            <Route exact path="/Home" component={ < Home />} />
            <Route path="/About" component={< AboutMe />} />
            <Route path="/Projects" component={< Projects />} />
            <Route path="/Contact" component={< Contact /> } />
          </Routes>
        < Home />
        < AboutMe />
        < Projects />
        < Contact />
        <Footer/>
      </Router>
    </div>
      
  );
}

export default App;
