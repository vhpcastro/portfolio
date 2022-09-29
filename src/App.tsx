import React from 'react';

import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    
      <div className="container">
        <Navbar/>
        <Home />
        <About />
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>

    </>
  );
}

export default App;
