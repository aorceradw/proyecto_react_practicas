import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Hero() {
    const kanjiRef     = useRef(null);
    const romajiRef    = useRef(null);
    const definicionRef = useRef(null);
    const ctaRef       = useRef(null);
    const [listo, setListo] = useState(false);

    useEffect(() => {
        setListo(true);
    }, []);

    useEffect(() => {
        if (!listo) return;

        const tl = gsap.timeline();

        tl.from(kanjiRef.current, {
            y: 80, opacity: 0, duration: 1.8, ease: 'power4.out'
        })
        .from(romajiRef.current, {
            y: 30, opacity: 0, duration: 1, ease: 'power3.out'
        }, '-=0.8')
        .from(definicionRef.current, {
            y: 20, opacity: 0, duration: 0.8, ease: 'power2.out'
        }, '-=0.5')
        .from(ctaRef.current, {
            y: 20, opacity: 0, duration: 0.8, ease: 'power2.out'
        }, '-=0.3');

        return () => tl.kill();
    }, [listo]);

    return (
        <section className="hero">

            <div className="hero-overlay" />

            <div className="hero-contenido">
                <h1 ref={kanjiRef} className="hero-kanji">進化</h1>

                <div ref={romajiRef} className="hero-romaji">
                    <span>/</span>
                    <span>SHINKA</span>
                    <span>/</span>
                </div>

                <p ref={definicionRef} className="hero-definicion">
                    Evolución. El salto que no tiene vuelta atrás.
                </p>

                <Link ref={ctaRef} to="/trabajos" className="hero-cta">
                    Descubrir
                </Link>
            </div>

            <div className="hero-scroll">
                <span className="hero-scroll-linea" />
                <span>scroll</span>
            </div>

        </section>
    );
}