import { Link } from "react-router-dom";
import Form from "../components/ui/Form";

export default function Home() {
    return (
        <main>
            <section className="hero-contenedor">
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

                <div className="hero-contenido">
                    <h1 className="hero-titulo texto-cromo animar">Angela</h1>
                    <p className="hero-subtitulo animar retraso-1">Desarrollo web · Imagen corporativa · Diseño gráfico</p>
                    <Link to="/trabajos" className="hero-cta animar retraso-2">Ver proyectos</Link>
                </div>

                <div className="hero-scroll"></div>
            </section>

            <div className="marquee-contenedor">
                <div className="marquee-texto">
                    Desarrollo web · Imagen corporativa · Branding · Diseño gráfico · Desarrollo web · Imagen corporativa · Branding · Diseño gráfico · Desarrollo web · Imagen corporativa · Branding · Diseño gráfico ·&nbsp;
                </div>
            </div>

            <section className="seccion-servicios">
                <div className="tarjeta servicio-tarjeta servicio-1 animar">
                    <span className="etiqueta">01</span>
                    <h3 className="servicio-titulo">Desarrollo web</h3>
                </div>

                <div className="tarjeta servicio-tarjeta servicio-2 animar retraso-1">
                    <span className="etiqueta">02</span>
                    <h3 className="servicio-titulo">Imagen corporativa</h3>
                </div>

                <div className="tarjeta servicio-tarjeta servicio-3 animar retraso-2">
                    <span className="etiqueta">03</span>
                    <h3 className="servicio-titulo">Diseño de marca</h3>
                </div>
            </section>

            <Form />
        </main>
    );
}
