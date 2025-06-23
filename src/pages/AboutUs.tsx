import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // ✅ Update path if different

const AboutSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const icons = [
        { label: "python", color: "bg-yellow-100" },
        { label: "react", color: "bg-purple-100" },
        { label: "figma", color: "bg-blue-100" },
        { label: "tailwind", color: "bg-cyan-100" },
        { label: "mongodb", color: "bg-green-100" },
        { label: "python", color: "bg-yellow-100" },
        { label: "python", color: "bg-blue-100" },
        { label: "python", color: "bg-yellow-100" },
        { label: "python", color: "bg-green-100" },
        { label: "python", color: "bg-teal-100" },
        { label: "python", color: "bg-cyan-100" },
        { label: "python", color: "bg-blue-100" }
    ];

    return (
        <div className="min-h-screen px-8 md:px-32 py-16 font-sans text-black bg-white">
            <Navbar /> {/* ✅ Reusable header */}

            {/* Intro Section */}
            <section className="grid md:grid-cols-2 gap-10 mt-16">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Hey we're Forge!</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit amet, con dhsnqw
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit amet, con dhsnqw
                    </p>
                </div>
                <div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit amet, con dhsnqw
                    </p>
                </div>
            </section>

            {/* Image Placeholder Section */}
            <section className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-100 w-full h-64" />
                <div className="bg-gray-200 w-full h-64" />
            </section>

            {/* Text Paragraph */}
            <p className="mt-8">
                Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse adipiscing elit, sed do
            </p>

            {/* Icons Section */}
            <section className="grid grid-cols-6 gap-6 justify-items-center mt-12">
                {icons.map(({ label, color }, idx) => {
                    const isTopRow = idx < 6;
                    const shift = scrollY > 100 ? (isTopRow ? -40 : 40) : 0;

                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center space-y-1 transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${shift}px)` }}
                        >
                            <div className={`w-12 h-12 rounded-xl ${color}`} />
                            <span className="text-xs text-gray-600">{label}</span>
                        </div>
                    );
                })}
            </section>

            {/* Footer Paragraph */}
            <p className="mt-12 text-sm">
                Lorem ipsum dolor sit amet, con dhsnqw
            </p>
        </div>
    );
};

export default AboutSection;
