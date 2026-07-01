import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';

import Header   from './components/Header';
import Footer   from './components/Footer';
import SubirArriba from './components/SubirArriba';

// Optimized: Lazy loading page components to reduce initial bundle size
const Home     = lazy(() => import('./pages/Home'));
const Work     = lazy(() => import('./pages/Work'));
const SobreMi  = lazy(() => import('./pages/Sobre-Mi'));
const Contacto = lazy(() => import('./pages/Contacto'));

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            {/*
                Performance Optimization: Suspense boundary for lazy-loaded routes.
                Placed inside AnimatePresence to ensure exit animations are not interrupted.
                Using a centered fallback with min-height to prevent layout shifts.
            */}
            <Suspense fallback={
                <div className="flex items-center justify-center" style={{ minHeight: '200px' }}>
                    <p>Cargando...</p>
                </div>
            }>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Work />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </Suspense>
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