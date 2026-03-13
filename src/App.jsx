import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <div className="contenido-principal">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Work />} />
                    <Route path="/sobre-mi" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
