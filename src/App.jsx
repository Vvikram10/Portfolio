import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contact';

const App = () => {
  return (
  
      <div className="waving-star-background">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      
      </div>

  );
};

export default App;
