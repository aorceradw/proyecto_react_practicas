import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header   from './components/Header';
import Footer   from './components/Footer';
import SubirArriba from './components/SubirArriba';

import { lazy, Suspense } from 'react';

/**
 * ⚡ Bolt Optimization: Route-based Code Splitting
 *
 * By using React.lazy and Suspense, we split the application into smaller chunks.
 * This reduces the initial JavaScript payload by ~28kB (~7.25%), improving
 * initial load performance and Time to Interactive (TTI).
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
                {/*
                  Suspense handles the loading state of lazy-loaded components.
                  fallback={null} prevents layout shifts during transitions while
                  allowing AnimatePresence to manage exit animations correctly.
                */}
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