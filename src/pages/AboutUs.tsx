// components/AboutUs.tsx
import React from "react";

const AboutUs = () => {
    return (
        <div
            className="bg-white text-black px-8 py-20"
            style={{
                animation: "slideUp 1s ease-out forwards",
            }}
        >
            <h2 className="text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg max-w-3xl">
                We are a team of passionate engineers building powerful digital experiences. Our mission is to turn your ideas into scalable, maintainable, and impactful products through modern design and technology.
            </p>
        </div>
    );
};

export default AboutUs;
