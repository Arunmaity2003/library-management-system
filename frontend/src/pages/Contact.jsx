import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="h-auto md:h-screen p-0 md:p-4 bg-zinc-900 text-white flex flex-col items-center justify-center">

            {/* Header Section */}
            <div className="w-full flex flex-col items-center justify-center py-8">
                <h1 className="text-3xl md:text-5xl font-semibold text-zinc-100 mb-4">
                    Contact Us
                </h1>
                <div className="h-[4px] w-[100px] bg-blue-500 rounded-full"></div>
            </div>

            {/* Main Content Area */}
            <div className="w-full md:w-4/5 lg:w-3/4 bg-zinc-800 rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

                {/* Left Side: Contact Information */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                        We are here to help you with any questions regarding our library services. Reach out to us directly!
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-all duration-300">
                            <div className="bg-zinc-900 p-4 rounded-full text-blue-500 text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-zinc-100">Address</h3>
                                <p className="text-sm font-mono text-zinc-400">
                                    123, Library St, Code City, Kolkata - 270001
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-all duration-300">
                            <div className="bg-zinc-900 p-4 rounded-full text-blue-500 text-2xl">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-zinc-100">Phone</h3>
                                <p className="text-sm font-mono text-zinc-400">
                                    +91 9876543210
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-all duration-300">
                            <div className="bg-zinc-900 p-4 rounded-full text-blue-500 text-2xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-zinc-100">Email</h3>
                                <p className="text-sm font-mono text-zinc-400">
                                    contact@libraryapp.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle: Vertical Divider */}
                {/* Hidden on mobile (h-0), visible on md screens and up */}
                <div className="hidden md:block w-[2px] bg-zinc-600 h-[300px] rounded-full opacity-50"></div>

                {/* Horizontal Divider for Mobile Only */}
                <div className="block md:hidden w-full h-[2px] bg-zinc-600 opacity-50 my-4"></div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg"
                        alt="Library Contact"
                        className="rounded-lg shadow-2xl object-cover h-[300px] w-full md:h-[400px] opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>

            </div>
        </div>
    );
};

export default Contact;