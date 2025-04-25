import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import icon from '../assets/icon.jpg'; // Adjust path if your folder structure is different


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="flex items-center gap-1 cursor-pointer">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>
          <img
  src={icon}
  alt="Logo"
  className="h-16 w-16 object-contain rounded-full"
/>


        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            onClick={handleNavClick}
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
              location.pathname === '/' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={handleNavClick}
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
              location.pathname === '/about' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About Us
          </Link>

          {/* Our Service with dropdown on hover only */}
          <div className="relative group">
            <Link
              to="/ourservices"
              onClick={handleNavClick}
              className={`text-sm font-medium px-2 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                location.pathname === '/ourservices' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Our Service
            </Link>

            {/* Dropdown shown on hover only */}
            <div className="absolute left-0 mt-1 hidden group-hover:block">
              <div className="bg-white shadow-lg rounded-md py-2 w-40 z-50">
                <Link to="/tools" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tools</Link>
                <Link to="/products" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Products</Link>
                <Link to="/efgh" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EFGH</Link>
                <Link to="/ijkl" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IJKL</Link>
              </div>
            </div>
          </div>

          <a
            href="/#testimonials"
            onClick={handleNavClick}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
          >
            Testimonials
          </a>
        </div>

        <Link
          to="/contact"
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          Get in touch
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">About Us</Link>
          <Link to="/ourservices" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">Our Service</Link>
          <div className="ml-4">
            <Link to="/tools" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">Tools</Link>
            <Link to="/products" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">Products</Link>
            <Link to="/efgh" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">EFGH</Link>
            <Link to="/ijkl" onClick={handleNavClick} className="block text-gray-600 text-sm py-1 hover:text-blue-600">IJKL</Link>
          </div>
          <a
            href="/#testimonials"
            onClick={handleNavClick}
            className="block text-gray-600 text-sm py-1 hover:text-blue-600"
          >
            Testimonials
          </a>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
