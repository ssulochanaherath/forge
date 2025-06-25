import React from "react";
import Navbar from "../components/Navbar.tsx";

const PortfolioPage = () => {
    return (
        <div className="min-h-screen w-full bg-white font-sans">
            < Navbar />

            {/* Intro Section */}
            <section className="px-10 py-14">
                <h2 className="text-4xl font-semibold text-gray-900">portfolio.</h2>
                <p className="mt-2 text-gray-500 max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
                <p className="text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>

                {/* Featured Project Cards */}
                <div className="flex gap-4 mt-8 flex-wrap">
                    <div className="w-[300px] h-[200px] bg-gray-100 shadow rounded p-2">
                        <img src="/project1.jpg" alt="Featured" className="w-full h-full object-cover rounded" />
                    </div>
                    <div className="w-[300px] h-[200px] bg-gray-100 shadow rounded p-2">
                        <img src="/project2.jpg" alt="Featured" className="w-full h-full object-cover rounded" />
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="px-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
                        >
                            <img
                                src="/placeholder.jpg"
                                alt="project"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-gray-800 font-medium">Lorem ipsum dolor sit</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1c1c1c] text-white py-10 px-10 relative">
                <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-t-full"></div>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <p className="text-xl font-light">Lorem ipsum dolor consectetur</p>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Team</p>
                        <p className="text-sm">2025@lksuren</p>
                        <p className="text-sm">FORGE</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Routes</p>
                        <div className="flex flex-col gap-1">
                            <a href="#" className="text-sm hover:underline">Home</a>
                            <a href="#" className="text-sm hover:underline">Portfolio</a>
                            <a href="#" className="text-sm hover:underline">Contact</a>
                            <a href="#" className="text-sm hover:underline">Lorem</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioPage;
