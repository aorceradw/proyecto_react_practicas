import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Opiniones from '../components/Opiniones';

export default function Home() {
    return (
        <main className="home">

            <Hero />

            <section className="seccion servicios">
                <div className="contenedor">
                    <div className="servicios-cabecera animar">
                        <span className="etiqueta">Servicios de diseño</span>
                        <h2 className="gradient-text">Soluciones Digitales</h2>
                    </div>

                    <div className="servicios-grid">
                        <div className="glass servicio animar retraso-1">
                            <span className="servicio-numero">01</span>
                            <h3 className="servicio-nombre">Estrategia & Marca</h3>
                            <p>
                                Definimos el núcleo de tu identidad para que cada 
                                interacción digital sea coherente y potente.
                            </p>
                        </div>
                        <div className="glass servicio animar retraso-2">
                            <span className="servicio-numero">02</span>
                            <h3 className="servicio-nombre">Diseño UI/UX</h3>
                            <p>
                                Interfaces intuitivas y estéticas que maximizan 
                                la conversión y el placer de uso.
                            </p>
                        </div>
                        <div className="glass servicio animar retraso-3">
                            <span className="servicio-numero">03</span>
                            <h3 className="servicio-nombre">Desarrollo React</h3>
                            <p>
                                Código limpio, rápido y escalable. Construimos 
                                experiencias web de alto rendimiento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contenedor seccion galeria-home">
                <div className="galeria-home-cabecera animar">
                    <span className="etiqueta">Portafolio</span>
                    <h2 className="gradient-text">Proyectos Destacados</h2>
                </div>

                <ul className="galeria-home-lista">
                    <li className="galeria-home-item animar retraso-1">
                        <img src="/fotos/proyecto-01.jpg" alt="Proyecto 01" className="galeria-home-imagen" />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Branding Corporativo</span>
                        </div>
                    </li>
                    <li className="galeria-home-item animar retraso-2">
                        <img src="/fotos/proyecto-02.jpg" alt="Proyecto 02" className="galeria-home-imagen" />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Interface Design</span>
                        </div>
                    </li>
                    <li className="galeria-home-item galeria-home-item--total animar retraso-3">
                        <img src="/fotos/proyecto-03.jpg" alt="Proyecto 03" className="galeria-home-imagen" />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">E-commerce Experience</span>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="contenedor seccion">
                <Opiniones />
            </section>

            <section className="seccion cta-contacto animar">
                <div className="contenedor glass" style={{ padding: '5rem', textAlign: 'center' }}>
                    <h2 className="gradient-text" style={{ marginBottom: '1.5rem' }}>¿Listo para el siguiente nivel?</h2>
                    <p style={{ margin: '0 auto 3rem', maxWidth: '600px' }}>
                        Si buscas una identidad digital que destaque por su calidad técnica 
                        y sensibilidad estética, hablemos.
                    </p>
                    <Link to="/contacto" className="hero-cta">
                        Empezar proyecto
                    </Link>
                </div>
            </section>

        </main>
    );
}