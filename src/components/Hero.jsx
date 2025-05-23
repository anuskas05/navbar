import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from "../assets/hero-image.png";
import featureImage1 from "../assets/feature.jpg"; // Add new images in your assets
import featureImage2 from "../assets/feature2.jpg"; // Add new images in your assets

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white pt-36 pb-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Hero Left Content */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Turn Memories Into Art With AI.
          </h1>
          <p className="text-gray-600 text-lg">
            We not only help you build but also ensure your growth using modern, personalized AI-driven solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
              Get Started
            </button>
            <button className="text-orange-500 hover:underline font-semibold py-3 px-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Right Image */}
        <div className="md:w-1/2 relative" data-aos="fade-left">
          <div className="bg-blue-100 rounded-full w-[350px] h-[350px] mx-auto relative flex items-center justify-center shadow-xl">
            <img
              src={heroImage}
              alt="AI Hero"
              className="w-[280px] h-auto object-cover rounded-full z-10"
            />
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-md">
              <p className="text-sm font-semibold text-gray-800">35K+ Projects Completed</p>
            </div>
            <div className="absolute top-4 left-4 bg-orange-100 p-2 rounded-full shadow-md">
              <span role="img" aria-label="growth">📈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["AI Portraits", "Image Upscaling", "Creative Filters", "Custom Avatars"].map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h4 className="text-lg font-bold text-blue-900 mb-1">{service}</h4>
            <p className="text-sm text-gray-600">Professional-grade output using next-gen models.</p>
          </div>
        ))}
      </div>

      {/* Feature Section 1 */}
      <div className="mt-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src={featureImage1}
            alt="Feature 1"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
        
        {/* Right Text */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Advanced AI Editing Tools
          </h2>
          <p className="text-gray-600 text-lg">
            Unlock the full potential of your memories. Our cutting-edge AI tools provide seamless transformations, bringing your images to life like never before.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
            Explore Tools
          </button>
        </div>
      </div>

      {/* Feature Section 2 */}
      <div className="mt-28 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Right Image */}
        <div className="md:w-1/2" data-aos="fade-left">
          <img
            src={featureImage2}
            alt="Feature 2"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
        
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Personalized Art Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Whether it's a portrait, a landscape, or a fantasy recreation, our AI models are trained to meet your personal and professional needs.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
            Customize Now
          </button>
        </div>
      </div>

    </section>
  );
};

export default Home;


