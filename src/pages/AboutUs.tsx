import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-white text-black p-10"
        >
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-6 text-lg max-w-3xl">
                We’re a creative dev studio building SaaS platforms, AI tools, and fast MVPs.
                Our mission is to turn your idea into a powerful digital product.
            </p>
        </motion.div>
    );
};

export default AboutUs;
