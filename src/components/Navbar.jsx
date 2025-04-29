import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import icon from '../assets/icon.jpg';

const services = [
  { name: 'Salesforce Consulting', path: '/salesforce-consulting' },
  { name: 'Web App Development', path: '/web-app-development' },
  { name: 'Mobile App Development', path: '/mobile-app-development' },
  { name: 'UI/UX Design', path: '/ui-ux-design' },
  { name: 'Digital Marketing', path: '/digital-marketing' },
  { name: 'Quality Assurance', path: '/quality-assurance' },
];

const solutions = [
  { name: 'Healthcare Solutions', path: '/healthcare-solutions' },
  { name: 'EdTech Solutions', path: '/edtech-solutions' },
  { name: 'FinTech Solutions', path: '/fintech-solutions' },
  { name: 'eCommerce Solutions', path: '/ecommerce-solutions' },
  { name: 'Logistic Solutions', path: '/logistic-solutions' },
  { name: 'Food Delivery Solutions', path: '/food-delivery-solutions' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const servicePaths = [...services, ...solutions].map(s => s.path);
    if (servicePaths.includes(location.pathname) || location.pathname === '/our-services') {
      setActiveDropdown('services');
    } else {
      setActiveDropdown(null);
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 md:h-20 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo and Menu Icon */}
        <div className="flex items-center gap-2">
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>
          <img src={icon} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeAll}
              className={`relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:w-0 hover:after:w-full ${
                location.pathname === link.path ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Our Services Link */}
          <div className="relative">
            <Link
              to="/our-services"
              onClick={closeAll}
              className={`relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:w-0 hover:after:w-full ${
                location.pathname === '/our-services' ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Our Services
            </Link>

            {/* Mega Menu */}
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                  className="absolute -left-32 top-10 w-[600px] p-6 bg-white rounded-xl shadow-2xl grid grid-cols-2 gap-8 z-50"
                >
                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm mb-3">Services</h4>
                    <div className="space-y-2">
                      {services.map((item) => (
                        <motion.div key={item.path} variants={itemVariants}>
                          <Link
                            to={item.path}
                            onClick={closeAll}
                            className={`inline-block text-sm relative transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all ${
                              location.pathname === item.path
                                ? 'text-blue-600 font-medium after:w-full'
                                : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm mb-3">Solutions</h4>
                    <div className="space-y-2">
                      {solutions.map((item) => (
                        <motion.div key={item.path} variants={itemVariants}>
                          <Link
                            to={item.path}
                            onClick={closeAll}
                            className={`inline-block text-sm relative transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all ${
                              location.pathname === item.path
                                ? 'text-blue-600 font-medium after:w-full'
                                : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testimonials */}
          <a
            href="/#testimonials"
            onClick={closeAll}
            className="relative text-sm font-medium text-gray-600 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
          >
            Testimonials
          </a>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          Get in Touch
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">
          <Link to="/" onClick={closeAll} className="inline-block text-sm text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={closeAll} className="inline-block text-sm text-gray-600 hover:text-blue-600">About Us</Link>

          <details className="text-gray-600">
            <summary className="text-sm font-medium py-2 cursor-pointer">Our Services</summary>
            <div className="ml-4 mt-2 space-y-2">
              {[...services, ...solutions].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAll}
                  className={`inline-block text-sm transition ${
                    location.pathname === item.path
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </details>

          <a
            href="/#testimonials"
            onClick={closeAll}
            className="inline-block text-sm text-gray-600 hover:text-blue-600"
          >
            Testimonials
          </a>

          <Link
            to="/contact"
            onClick={closeAll}
            className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md text-sm font-medium"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

