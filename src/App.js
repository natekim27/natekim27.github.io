import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Sidebar />
    <div className = 'page'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
