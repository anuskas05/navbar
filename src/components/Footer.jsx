import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-300">
            We are a team dedicated to providing the best products and services to our customers.
          </p>
        </div>

        {/* Quick Links with real pages */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline text-gray-300">Home</Link></li>
            <li><Link to="/services" className="hover:underline text-gray-300">Services</Link></li>
            <li><Link to="/contact" className="hover:underline text-gray-300">Contact</Link></li>
            <li><Link to="/about" className="hover:underline text-gray-300">About</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
          <ul className="flex flex-col space-y-2">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-blue-500" />
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-sky-500" />
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-orange-500" />
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                Instagram
              </a>
            </li>
         
            <li className="flex items-center gap-2">
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                Example Link
              </a>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="border-t border-gray-600 pt-4 mt-8 text-gray-300 text-center text-sm">
        <p>© 2025 Code with Yourself. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



