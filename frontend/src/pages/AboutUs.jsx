import React from "react";

const AboutUs = () => {
  return (
    <div className="h-auto p-0 md:p-4 bg-zinc-900 text-white">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-zinc-100 mb-4">
          About Us
        </h1>
        <div className="h-1 w-[100px] bg-blue-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed">
              We believe in the power of knowledge. Our mission is to provide a
              seamless and accessible platform for book lovers, students, and
              researchers to explore, manage, and discover a vast collection of
              literature. Whether you are looking for timeless classics or modern
              masterpieces, we aim to bridge the gap between readers and stories.
            </p>
          </div>
          <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Our Vision</h2>
            <p className="text-zinc-400 leading-relaxed">
              To create a digital ecosystem where organizing personal libraries
              and discovering new reads is effortless. We strive to build a
              community-driven platform that celebrates the joy of reading while
              leveraging modern technology to simplify library management for
              everyone.
            </p>
          </div>
        </div>

        {/* Stats Section (Optional but looks professional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="p-6 bg-zinc-800 rounded hover:bg-zinc-700 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">100+</h3>
            <p className="text-zinc-400">Books Available</p>
          </div>
          <div className="p-6 bg-zinc-800 rounded hover:bg-zinc-700 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
            <p className="text-zinc-400">Active Users</p>
          </div>
          <div className="p-6 bg-zinc-800 rounded hover:bg-zinc-700 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">24/7</h3>
            <p className="text-zinc-400">System Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;