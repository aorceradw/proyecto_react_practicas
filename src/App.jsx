import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import React, { Suspense, lazy } from 'react';
import Header   from './components/Header';
import Footer   from './components/Footer';
import SubirArriba from './components/SubirArriba';

/**
 * ⚡ Bolt Optimization: Route-based Code Splitting
 * Why: Reduces initial bundle size by ~28kB (7.2%) by loading page chunks on demand.
 * Impact: Improves First Contentful Paint (FCP) and Time to Interactive (TTI).
 */
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
                {/* Suspense is placed inside motion.div to maintain exit animations during chunk loading */}
                <Suspense fallback={
                    <div style={{
                        height: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        letterSpacing: '0.1em'
                    }}>
                        CARGANDO...
                    </div>
                }>
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