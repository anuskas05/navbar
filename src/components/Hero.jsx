import React from 'react';
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            🎁 Turn Memories Into Art With AI.
            <span> "We Build, You Grow."</span>
          </h1>
        </div>

        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
          <div className="relative">
            <img src={heroImage} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">We are creators, innovators, and dreamers building experiences powered by AI and human imagination.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">From AI artwork to digital tools — we provide everything you need to grow creatively.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 text-lg">Hear from those who’ve worked with us and turned their vision into reality.</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Let’s make something amazing together. Drop us a message!</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Hero;
