import React from 'react';

import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    
      <div className="container">
        <Navbar/>
        <Home />
        <About />
      </div>

    </>
  );
}

export default App;
