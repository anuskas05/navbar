import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { FaFemale } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const dropdownLinks = [
    { path: "/tools", label: "Tools" },
    { path: "/products", label: "Products" },
    { path: "/workers", label: "Workers" },
    { path: "/partnership", label: "Partnership" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="flex items-center gap-1 cursor-pointer">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>
          <FaFemale className="text-blue-600 text-2xl" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {/* Home Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                ${location.pathname === '/' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md z-50 w-40">
                {dropdownLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            to="/about"
            onClick={handleNavClick}
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
              ${location.pathname === '/about' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
          >
            About Us
          </Link>

         
          <a
            href="/#services"
            onClick={handleNavClick}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
          >
            Our Service
          </a>
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
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Home</p>
            {dropdownLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={handleNavClick}
                className="block text-gray-600 text-sm py-1 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/about"
            onClick={handleNavClick}
            className="block text-gray-600 text-sm py-1 hover:text-blue-600"
          >
            About Us
          </Link>

          <a
            href="/#services"
            onClick={handleNavClick}
            className="block text-gray-600 text-sm py-1 hover:text-blue-600"
          >
            Our Service
          </a>
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
