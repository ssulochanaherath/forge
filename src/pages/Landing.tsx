import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar.tsx"

const Landing = () => {
    const [scrollY, setScrollY] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false);
    const navigate = useNavigate();

    const maxScrollLeft = 270;
    const maxScrollRight = 330;
    const maxScrollDown = 75;
    const maxScrollUp = 75;
    const verticalScrollDelay = 200;

    const maxAnimationScroll = Math.max(
        maxScrollLeft,
        maxScrollRight,
        maxScrollDown + verticalScrollDelay,
        maxScrollUp + verticalScrollDelay
    );

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll >= maxAnimationScroll && !animationComplete) {
                window.scrollTo(0, maxAnimationScroll);
                setAnimationComplete(true);
                setScrollY(maxAnimationScroll);
            } else if (currentScroll < maxAnimationScroll) {
                setScrollY(currentScroll);
                if (animationComplete) setAnimationComplete(false);
            }
        };

        document.body.style.overflow = exitAnimation ? "hidden" : "auto";
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [animationComplete, maxAnimationScroll, exitAnimation]);

    const leftScroll = Math.min(scrollY, maxScrollLeft);
    const rightScroll = Math.min(scrollY, maxScrollRight);
    const verticalScrollAmount = Math.max(scrollY - verticalScrollDelay, 0);
    const downScroll = Math.min(verticalScrollAmount, maxScrollDown);
    const upScroll = Math.min(verticalScrollAmount, maxScrollUp);

    const fadeInScrollStart = 0;
    const fadeInScrollEnd = 200;
    const opacityProgress = Math.min(
        Math.max((scrollY - fadeInScrollStart) / (fadeInScrollEnd - fadeInScrollStart), 0),
        1
    );

    return (
        <>
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: exitAnimation ? -1000 : 0, opacity: exitAnimation ? 0 : 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="min-h-screen bg-white text-black px-8 py-10 font-sans">
                    <Navbar /> {/* <== Reusable Component */}

                    {/* Main Content */}
                    <div
                        style={{
                            position: animationComplete ? "relative" : "fixed",
                            width: "100%",
                            marginTop: "50px",
                        }}
                    >
                        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Text - moves right */}
                            <div
                                className="space-y-14 text-9xl font-bold leading-tight ml-28 relative"
                                style={{
                                    transform: `translateX(${leftScroll}px)`,
                                    transition: "transform 0.3s ease-out",
                                }}
                            >
                                <div>Code</div>
                                <div className="relative inline-block">
                                    {/* Vertical "We are" beside 'F' */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "-2rem",
                                            top: "8.2rem",
                                            transform: `translateX(${-(1 - opacityProgress) * 200}px) rotate(-90deg)`,
                                            transformOrigin: "left top",
                                            opacity: opacityProgress,
                                            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                                            fontSize: "1.7rem",
                                            color: "#1C1C1C",
                                            fontWeight: "500",
                                            whiteSpace: "nowrap",
                                            letterSpacing: "0.1rem",
                                        }}
                                    >
                                        We are
                                    </div>

                                    <span>Forge</span>
                                </div>

                            </div>

                            {/* Right Text */}
                            <div className="flex flex-col justify-center space-y-6">
                                <p
                                    className="text-gray-800 text-base max-w-md"
                                    style={{
                                        transform: `translateY(${downScroll}px)`,
                                        transition: "transform 0.3s ease-out",
                                    }}
                                >
                                    We build custom SaaS, AI tools, and lightning-fast MVPs for startups.
                                </p>
                                <h2
                                    className="text-9xl font-bold"
                                    style={{
                                        transform: `translateX(-${rightScroll}px)`,
                                        transition: "transform 0.3s ease-out",
                                    }}
                                >
                                    Craft
                                </h2>
                                <a
                                    href="#"
                                    className="text-gray-800 text-base max-w-md hover:underline font-medium"
                                    style={{
                                        transform: `translateY(-${upScroll}px)`,
                                        transition: "transform 0.3s ease-out",
                                    }}
                                >
                                    Get a Free Project Estimate
                                </a>
                            </div>
                        </main>
                    </div>
                </div>

                <div style={{ height: "50vh" }}></div>

                {/* Social Icons - clean, no border, vertical list */}
                <div
                    style={{
                        position: "fixed",
                        top: "25%",
                        left: 250,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.8rem",
                        opacity: opacityProgress,
                        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                        transform: `translateX(${-(1 - opacityProgress) * 200}px)`,
                        zIndex: 100,
                    }}
                >
                    {/* Social icon links */}
                    {[
                        { name: "Facebook", link: "#", icon: (
                                <svg width="35" height="35" fill="grey" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.86h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/>
                                </svg>
                            )},
                        { name: "Instagram", link: "#", icon: (
                                <svg width="35" height="35" fill="grey" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.25a1 1 0 110 2 1 1 0 010-2z"/>
                                </svg>
                            )},
                        { name: "X", link: "#", icon: (
                                <svg width="35" height="35" fill="grey" viewBox="0 0 24 24">
                                    <path d="M20.39 3H17.5l-4.24 5.7L8.06 3H3l7.5 10L3 21h2.89l4.97-6.73L15.94 21H21l-7.58-10L20.39 3z"/>
                                </svg>
                            )},
                        { name: "LinkedIn", link: "#", icon: (
                                <svg width="35" height="35" fill="grey" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4v12H3v-12zm7.5 0h3.5v1.64h.05c.49-.93 1.68-1.91 3.46-1.91 3.7 0 4.38 2.44 4.38 5.61v6.66h-4v-5.91c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6.01h-4v-12z"/>
                                </svg>
                            )},
                    ].map(({ name, link, icon }) => (
                        <a
                            key={name}
                            href={link}
                            title={name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "2.5rem",
                                height: "2.5rem",
                                cursor: "pointer",
                            }}
                        >
                            {icon}
                        </a>
                    ))}
                </div>


                {/* About Us Button */}
                <button
                    onClick={() => setExitAnimation(true)}
                    style={{
                        position: "fixed",
                        bottom: 150,
                        right: 450,
                        opacity: opacityProgress,
                        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                        transform: `translateX(${(1 - opacityProgress) * 200}px)`,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "6rem",
                        height: "6rem",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "5rem",
                            height: "5rem",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                border: "3px solid black",
                                backgroundColor: "transparent",
                                boxSizing: "border-box",
                            }}
                        />
                        <span
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "-2.5rem",
                                transform: "translateY(-50%)",
                                backgroundColor: "white",
                                padding: "0.25rem 0.5rem",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                color: "black",
                                borderRadius: "9999px",
                                whiteSpace: "nowrap",
                            }}
                        >
              About Us
            </span>
                    </div>
                </button>
            </motion.div>

            {/* About Us fullscreen content outside landing content */}
            <AnimatePresence>
                {exitAnimation && (
                    <motion.div
                        initial={{ y: 1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 1000, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed top-0 left-0 w-full h-full bg-white z-[999]"
                    >
                        <button
                            className="absolute top-6 right-6 text-black font-bold text-xl px-4 py-2 rounded-md hover:bg-gray-200 transition"
                            onClick={() => setExitAnimation(false)}
                        >
                            Close
                        </button>
                        <div className="p-16 text-black max-w-4xl mx-auto mt-24">
                            <h1 className="text-6xl font-bold mb-6">About Us</h1>
                            <p className="text-lg leading-relaxed">
                                We are a passionate team building modern SaaS products, AI-powered tools,
                                and rapid MVPs to accelerate startup success. Our mission is to craft
                                innovative software experiences with precision and speed.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Landing;