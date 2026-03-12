import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";

export default function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trabajos" element={<Work />} />
                <Route path="/sobre-mi" element={<About />} />
            </Routes>
            <Footer />
        </main>
    );
}

