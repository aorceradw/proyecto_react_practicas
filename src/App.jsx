import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header   from './components/Header';
import Footer   from './components/Footer';

import Home     from './pages/Home';
import Work     from './pages/Work';
import SobreMi  from './pages/Sobre-Mi';
import Contacto from './pages/Contacto';

/* ── Variantes de transición ─────────────────────────
   Entrada: sube desde abajo con fade
   Salida:  baja con fade
   Duración corta — el usuario no espera
──────────────────────────────────────────────────── */
const variantes = {
    inicial: { opacity: 0, y: 18 },
    entrar:  { opacity: 1, y: 0,   transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    salir:   { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

/* ── AnimatedRoutes separado para poder usar useLocation ── */
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={variantes}
                initial="inicial"
                animate="entrar"
                exit="salir"
            >
                <Routes location={location}>
                    <Route path="/"         element={<Home />} />
                    <Route path="/trabajos" element={<Work />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <AnimatedRoutes />
            </div>
            <Footer />
        </BrowserRouter>
    );
}