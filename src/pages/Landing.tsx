import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="min-h-screen bg-white text-black px-8 py-10 font-sans">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 bg-white z-50 py-5">
                    <div className="px-28 flex justify-between items-center">
                        <h1 className="font-bold text-lg">FORGE.</h1>
                        <nav className="px-28 space-x-16 text-sm">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Services</a>
                            <a href="#" className="hover:underline">Projects</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </nav>
                    </div>
                </header>

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

                {exitAnimation && (
                    <motion.div
                        initial={{ y: 1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="fixed top-0 left-0 w-full h-full bg-white z-[999]"
                    >
                        <div className="p-16 text-black">
                            <h1 className="text-6xl font-bold mb-6">About Us</h1>
                            <p className="text-lg leading-relaxed max-w-3xl">
                                We are a passionate team building modern SaaS products, AI-powered tools, and rapid MVPs to accelerate startup success.
                                Our mission is to craft innovative software experiences with precision and speed.
                            </p>
                        </div>
                    </motion.div>
                )}

            </button>
        </motion.div>
    );
};

export default Landing;
