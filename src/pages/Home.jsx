import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Opiniones from "../components/Opiniones";

export default function Home() {
    return (
        <main className="home">

            {/* 1. Hero + Shinka */}
            <Hero />

            {/* 2. Marquee */}
            <div className="marquee">
                <div className="marquee-pista">
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                </div>
            </div>

            {/* 3. Servicios */}
            <section className="servicios">
                <div className="servicios-cabecera animar">
                    <span className="etiqueta">Qué hago</span>
                    <h2 className="servicios-titulo">Servicios</h2>
                </div>

                <div className="servicios-grid">
                    <div className="tarjeta servicio animar retraso-1">
                        <span className="servicio-numero">01</span>
                        <h3 className="servicio-nombre">Desarrollo web</h3>
                        <p className="servicio-descripcion">
                            Webs con criterio de marca. Frontend en React,
                            backend en Node. Código que respeta la identidad
                            de la empresa.
                        </p>
                    </div>
                    <div className="tarjeta servicio animar retraso-2">
                        <span className="servicio-numero">02</span>
                        <h3 className="servicio-nombre">Imagen corporativa</h3>
                        <p className="servicio-descripcion">
                            Análisis y construcción de la imagen que proyecta
                            tu marca. Lo que comunicas antes de abrir la boca.
                        </p>
                    </div>
                    <div className="tarjeta servicio animar retraso-3">
                        <span className="servicio-numero">03</span>
                        <h3 className="servicio-nombre">Diseño gráfico</h3>
                        <p className="servicio-descripcion">
                            Identidades visuales, sistemas de marca y diseño
                            editorial con intención y coherencia.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Galería home */}
            <section className="galeria-home">
                <div className="galeria-home-cabecera animar">
                    <span className="etiqueta">Archivo visual</span>
                    <h2 className="galeria-home-titulo">Trabajo</h2>
                </div>

                <ul className="galeria-home-lista">
                    <li className="galeria-home-item galeria-home-item--ancho animar retraso-1">
                        <img
                            src="/fotos/proyecto-01.jpg"
                            alt="Proyecto 01"
                            className="galeria-home-imagen"
                        />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Ver proyecto</span>
                        </div>
                    </li>
                    <li className="galeria-home-item galeria-home-item--medio animar retraso-2">
                        <img
                            src="/fotos/proyecto-02.jpg"
                            alt="Proyecto 02"
                            className="galeria-home-imagen"
                        />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Ver proyecto</span>
                        </div>
                    </li>
                    <li className="galeria-home-item galeria-home-item--total animar retraso-3">
                        <img
                            src="/fotos/proyecto-03.jpg"
                            alt="Proyecto 03"
                            className="galeria-home-imagen"
                        />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Ver proyecto</span>
                        </div>
                    </li>
                </ul>

                <div className="galeria-home-cta animar">
                    <Link to="/trabajos" className="galeria-home-link">
                        Ver todos los proyectos ↗
                    </Link>
                </div>
            </section>

            {/* 5. Opiniones */}
            <Opiniones />

            {/* 6. Hero CTA contacto */}
            <section className="cta-contacto animar">
                <span className="etiqueta">¿Siguiente paso?</span>
                <h2 className="cta-contacto-titulo">Hablemos</h2>
                <p className="cta-contacto-texto">
                    Si tienes un proyecto con personalidad, me interesa conocerlo.
                </p>
                <Link to="/contacto" className="cta-contacto-boton">
                    Contactar
                </Link>
            </section>

        </main>
    );
}