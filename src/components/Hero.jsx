import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            {/* ── HERO PRINCIPAL ── */}
            <section className="hero">

                <video
                    className="hero-video"
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="hero-overlay" />

                <div className="hero-contenido">
                    <span className="etiqueta hero-etiqueta">Granada, España</span>

                    <h1 className="hero-titulo">
                        <span className="hero-titulo-stroke">Angela</span>
                    </h1>

                    <p className="hero-tagline">
                        Desarrollo web · Imagen corporativa · Diseño gráfico
                    </p>
                </div>

                <div className="hero-scroll">
                    <span className="hero-scroll-linea" />
                    <span className="hero-scroll-texto">scroll</span>
                </div>

            </section>

            {/* ── SECCIÓN SHINKA ── */}
            <section className="shinka">

                {/* Kanji grande — el protagonista visual */}
                <h2 className="shinka-kanji">進化</h2>

                {/* Pronunciación */}
                <div className="shinka-pronunciacion">
                    <span className="shinka-barra">/</span>
                    <span className="shinka-romaji">SHINKA</span>
                    <span className="shinka-barra">/</span>
                </div>

                {/* Definición */}
                <p className="shinka-definicion">
                    Evolución. El salto que no tiene vuelta atrás.
                </p>

                {/* CTA */}
                <Link to="/trabajos" className="shinka-cta">
                    Ver la evolución en acción
                </Link>

            </section>
        </>
    );
}