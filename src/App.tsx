import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing.tsx";
import AboutUs from "./pages/AboutUs.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
