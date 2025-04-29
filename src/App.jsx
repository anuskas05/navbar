import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs'; // If you're using this, skip AboutPage
import Contact from './components/Contact';
import OurService from './components/OurService';
import Hero from './components/Hero';
// import AboutPage from './pages/AboutPage'; // remove if not using
import ToolsPage from './pages/ToolsPage';
import Products from './components/Products'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-service" element={<OurService />} />
        <Route path="/products" element={<Products />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
