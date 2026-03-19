import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Hero() {
    const kanjiRef = useRef(null);
    const romajiRef = useRef(null);
    const definicionRef = useRef(null);
    const ctaRef = useRef(null);
    const [listo, setListo] = useState(false);

    useEffect(() => {
        setListo(true);
    }, []);

    useEffect(() => {
        if (!listo) return;

        const tl = gsap.timeline();

        tl.from(kanjiRef.current, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        })
        .from(romajiRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from(definicionRef.current, {
            y: 15,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .from(ctaRef.current, {
            y: 15,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');

        return () => tl.kill();
    }, [listo]);

    return (
        <section className="hero">
            {/* Moving Aura Background (Animated in CSS) */}
            <div className="hero-aura">
                <div className="aura-blob aura-1"></div>
                <div className="aura-blob aura-2"></div>
            </div>

            <div className="hero-contenido">
                <div ref={romajiRef} className="hero-romaji">
                    <span className="hero-barra">/</span>
                    <span className="hero-romaji-texto">DIGITAL DESIGNER & DEV</span>
                    <span className="hero-barra">/</span>
                </div>
                
                <h1 ref={kanjiRef} className="hero-kanji gradient-text">進化 SHINKA</h1>
                
                <p ref={definicionRef} className="hero-definicion">
                    Evolución digital con intención estética. 
                    Construyendo marcas que no solo se ven, se sienten.
                </p>
                
                <Link ref={ctaRef} to="/trabajos" className="hero-cta">
                    Descubrir portafolio
                </Link>
            </div>

            {/* Subtle bottom gradient */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '20vh',
                background: 'linear-gradient(to top, var(--bg), transparent)',
                zIndex: 5
            }}></div>
        </section>
    );
}