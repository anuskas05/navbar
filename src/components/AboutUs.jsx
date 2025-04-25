import React from 'react';
import aboutImage from '../assets/about-image.png';

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 pt-28 pb-20 px-6 sm:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            See who's hiring in your area.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chat on projects via posts, messages, connect via social media and be recognized for networking success.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
              APPLY JOB
            </button>
            <button className="border border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-semibold py-2 px-6 rounded-lg transition">
              SEE ALL COMPANIES
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Team"
            className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Bottom Section: Highlights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {["Marketing", "Graphics", "Health", "Technology"].map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-100 text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-xl font-bold mb-2">{category}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>UI/UX</li>
              <li>Branding</li>
              <li>Social Media</li>
              <li>Logo Design</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
