
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App vh-100" class="bg-dark">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={ < Home />} />
            <Route path="/about" element={< AboutMe />} />
            <Route path="/projects" element={< Projects />} />
            <Route path="/contact" element ={< Contact /> } />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
