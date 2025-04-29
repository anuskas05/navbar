import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12">
      <div className="px-4 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
            <p>
              We are a team dedicated to providing the best products and services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:underline hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:underline hover:text-white">Contact</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">About</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Follow Us</h2>
            <ul className="flex flex-col space-y-2">
              <li className="flex items-center gap-2">
                <FaFacebookF className="text-blue-500" />
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-sky-500" />
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-orange-500" />
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">
                  Example Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Copyright Area */}
      <div className="bg-gray-950 py-5">
        <p className="text-center text-gray-500 text-sm">
          © 2025 Code with Yourself. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


 

