import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50 py-5">
            <div className="px-28 flex justify-between items-center">
                <h1 className="font-bold text-lg">FORGE.</h1>
                <nav className="px-28 space-x-16 text-sm">
                    <Link to="/about" className="hover:underline">Home</Link>
                    <Link to="/portfolio" className="hover:underline">Portfolio</Link>
                    <a href="/services" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Projects</a>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
