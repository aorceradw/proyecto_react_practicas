import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ModoClaroOscuro from './components/ModoClaroOscuro';

import Home from './pages/Home';
import Work from './pages/Work';
import SobreMi from './pages/Sobre-Mi';
import Contacto from './pages/Contacto';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Work />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </main>
            <Footer />
            <ModoClaroOscuro />
        </BrowserRouter>
    );
}