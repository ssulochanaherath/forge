import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing.tsx";
import AboutUs from "./pages/AboutUs.tsx";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
