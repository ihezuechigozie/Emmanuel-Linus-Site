import React from "react";
import Navbar from "../Components/Navbar";

function Blog() {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      {/* Navbar */}
      <div className="w-full z-20 relative">
        <Navbar />
      </div>

      {/* Centered message */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          No Articles Available
        </h2>
      </div>
    </div>
  );
}

export default Blog;
