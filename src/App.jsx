import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { lazy, Suspense } from 'react';
import Header   from './components/Header';
import Footer   from './components/Footer';
import SubirArriba from './components/SubirArriba';

// ⚡ Bolt: Implement route-based code splitting to reduce the initial bundle size.
// Page components are loaded only when the user navigates to the respective route.
const Home     = lazy(() => import('./pages/Home'));
const Work     = lazy(() => import('./pages/Work'));
const SobreMi  = lazy(() => import('./pages/Sobre-Mi'));
const Contacto = lazy(() => import('./pages/Contacto'));

const variantes = {
    inicial: { opacity: 0, y: 18 },
    entrar:  { opacity: 1, y: 0,   transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    salir:   { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

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
                <Suspense fallback={null}>
                    <Routes location={location}>
                        <Route path="/"         element={<Home />} />
                        <Route path="/trabajos" element={<Work />} />
                        <Route path="/sobre-mi" element={<SobreMi />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </Suspense>
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
            <SubirArriba />
        </BrowserRouter>
    );
}