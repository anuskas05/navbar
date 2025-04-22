import React from 'react';
import aboutImage from '../assets/about-image.png'; // Add your image to src/assets

const AboutPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-32 pb-20 container mx-auto">
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
        <p className="text-gray-700 text-lg">
          Welcome to our platform! We are dedicated to transforming your ideas into beautiful realities.
          Our mission is to build tools that help people grow, create, and succeed.
        </p>
        <p className="text-gray-600">
          With a team of creative minds and innovative technologies, we focus on delivering outstanding
          digital experiences tailored to your needs.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12">
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default AboutPage;

 