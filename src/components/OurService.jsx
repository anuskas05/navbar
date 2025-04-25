import React from 'react';
import { FaRocket, FaHandshake, FaLightbulb, FaChartLine, FaUsers, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: "Startup Launch",
    icon: <FaRocket />,
    description: "Kickstart your dream idea with expert guidance and tools."
  },
  {
    title: "Investor Relations",
    icon: <FaHandshake />,
    description: "Build trust with investors and secure the funding you need."
  },
  {
    title: "Innovation Strategy",
    icon: <FaLightbulb />,
    description: "Drive disruptive thinking with modern innovation roadmaps."
  },
  {
    title: "Growth Hacking",
    icon: <FaChartLine />,
    description: "Scale your product fast with tested marketing tactics."
  },
  {
    title: "Team Building",
    icon: <FaUsers />,
    description: "Assemble and retain high-performance startup teams."
  },
  {
    title: "MVP Development",
    icon: <FaLaptopCode />,
    description: "Build your Minimum Viable Product with cutting-edge tech."
  }
];

const OurService = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Startup Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering startups with the right tools, team, and strategy to scale successfully.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-56 h-56 transform rotate-45 bg-white shadow-xl rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 border-4 border-blue-200 rounded-xl group-hover:scale-105 transition" />
            <div className="transform -rotate-45 text-center px-4">
              <div className="text-blue-600 text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
