import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_t02u5ht', 'template_1m5tcm8', e.target, 'f6Ria0edoe60a4w0O')
      .then(
        (result) => {
          console.log(result.text);
          alert(`Thanks for registering, ${formData.name}!`);
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-white px-4">
      <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl max-w-xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">CONTACT US</h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Fill out the form and we'll get in touch soon.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8901"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="Your age"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-700 transition"
            >
              SUBMIT →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
