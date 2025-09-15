import React, { useState } from "react";
import contactUs01 from "../assets/contactUs01.jpg"; 
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = " https://emmanuel-linus-backend.onrender.com/contact"
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error: Could not connect to server.");
    }
  };

  return (
    <div className="w-full min-h-screen h-full bg-gray-900 text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="w-full z-20 relative">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <img
          src={contactUs01}
          alt="Contact Us"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-16 md:pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center px-4 py-12">
        <div className="max-w-4xl w-full px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300 ease-in-out"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300 ease-in-out"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 ease-in-out"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-2 text-sm font-medium text-center">{status}</p>
              )}
            </form>
             <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
