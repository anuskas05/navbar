import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


 
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';
 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
    
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;

