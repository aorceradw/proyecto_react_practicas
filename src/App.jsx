import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circPosition, setCircPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const targetHover = (e) => {
      const target = e.target.closest('a, button, .tarjeta, .grid-item, .carrusel-item');
      setHovering(!!target);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', targetHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', targetHover);
    };
  }, []);

  // Lerp para el circulo
  useEffect(() => {
    let requestRef;
    const updateCirc = () => {
      setCircPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestRef = requestAnimationFrame(updateCirc);
    };
    requestRef = requestAnimationFrame(updateCirc);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  return (
    <div className={hovering ? 'cursor-wrapper cursor-hover' : 'cursor-wrapper'}>
      <div 
        className="cursor-punto" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        className="cursor-circulo" 
        style={{ left: `${circPosition.x}px`, top: `${circPosition.y}px` }} 
      />
    </div>
  );
}

function GlobalScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer para animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visto');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animar');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <GlobalScrollHandler />
      <CustomCursor />
      
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Work />} />
          <Route path="/sobre-mi" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
