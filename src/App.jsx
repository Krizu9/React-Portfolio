// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
