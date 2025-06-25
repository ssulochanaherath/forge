import React from "react";
import Navbar from "../components/Navbar.tsx";

const Contact = () => {
    return (
        <div className="min-h-screen px-8 md:px-32 py-16 font-sans text-black bg-white">
            <Navbar /> {/* ✅ Reusable header */}

            {/* Main Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 py-14 gap-10">
                {/* Left Content */}
                <div className="md:col-span-2">
                    <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
                        Lorem ipsum dolor consectetur
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    {/* Questions List */}
                    <div className="mt-10 space-y-6">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex gap-4 items-start border-b pb-4">
                                <div className="text-xs text-gray-400 font-mono pt-1">0{i + 1}</div>
                                <div>
                                    <h4 className="font-medium text-gray-800">
                                        Lorem ipsum dolor sit amet ?
                                    </h4>
                                    <p className="text-sm text-gray-500">max de</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Send Button */}
                    <button className="mt-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all">
                        send
                    </button>
                </div>

                {/* Right Sidebar */}
                <div className="text-sm text-gray-700 space-y-6">
                    <div>
                        <p className="text-xs font-bold uppercase text-gray-400">Contact Details</p>
                        <p className="text-blue-600 mt-1 underline">forgeee@gmail.com</p>
                        <p>+94 90 56412789</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase text-gray-400">Business Details</p>
                        <p>No 112 galle road,<br />western province,<br />colombo</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase text-gray-400">Social Media</p>
                        <div className="flex gap-4 mt-2">
                            <img src="/facebook.svg" alt="fb" className="w-5 h-5" />
                            <img src="/instagram.svg" alt="ig" className="w-5 h-5" />
                            <img src="/linkedin.svg" alt="in" className="w-5 h-5" />
                            <img src="/x.svg" alt="x" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
