import React, { useState, useEffect } from "react";

const App = () => {
    const [scrollY, setScrollY] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    const maxScrollLeft = 300;
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

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [animationComplete, maxAnimationScroll]);

    const leftScroll = Math.min(scrollY, maxScrollLeft);
    const rightScroll = Math.min(scrollY, maxScrollRight);
    const verticalScrollAmount = Math.max(scrollY - verticalScrollDelay, 0);
    const downScroll = Math.min(verticalScrollAmount, maxScrollDown);
    const upScroll = Math.min(verticalScrollAmount, maxScrollUp);

    const fadeInScrollStart = 0;
    const fadeInScrollEnd = 200;
    const opacityProgress = Math.min(Math.max((scrollY - fadeInScrollStart) / (fadeInScrollEnd - fadeInScrollStart), 0), 1);

    return (
        <div>
            <div className="min-h-screen bg-white text-black px-8 py-10 font-sans">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-8 py-5 z-50">
                    <h1 className="font-bold text-lg relative">FORGE.</h1>
                    <nav className="space-x-8 text-sm">
                        <a href="#" className="hover:underline">
                            Home
                        </a>
                        <a href="#" className="hover:underline">
                            Services
                        </a>
                        <a href="#" className="hover:underline">
                            Projects
                        </a>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </nav>
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
                            className="space-y-14 text-[12rem] font-bold leading-tight ml-20 relative"
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
                                className="text-[12rem] font-bold"
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

            <button
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
                onClick={() => alert("About Us clicked!")}
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

        </div>
    );
};

export default App;
