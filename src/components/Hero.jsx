import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-kanji">進化</h1>

            <div className="hero-romaji">
                <span>/</span>
                <span>SHINKA</span>
                <span>/</span>
            </div>

            <p className="hero-desc">
                Evolución. El salto que no tiene vuelta atrás.
            </p>

            <Link to="/trabajos" className="hero-cta">
                Descubrir
            </Link>

            <div className="hero-scroll">
                <div className="hero-scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    );
}