import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GaleriaHome from '../components/Galeria-Home';
import Opiniones from '../components/Opiniones';

const STACK = [
    { id: 1, categoria: 'Frontend',    items: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'] },
    { id: 2, categoria: 'Backend',     items: ['Node.js', 'Express', 'MySQL'] },
    { id: 3, categoria: 'Diseño',      items: ['Figma', 'Illustrator', 'Photoshop'] },
    { id: 4, categoria: 'Herramientas',items: ['Git', 'GitHub', 'AWS Lab'] },
];

export default function Home() {
    return (
        <main>

            {/* Hero */}
            <Hero />

            {/* Marquee */}
            <div className="marquee">
                <div className="marquee-pista">
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                    <span>Desarrollo web · Imagen corporativa · Diseño gráfico · Granada · Branding · </span>
                </div>
            </div>

            {/* Servicios */}
            <section className="servicios">
                <div className="servicios-cabecera">
                    <span className="etiqueta">Qué hago</span>
                    <h2>Servicios</h2>
                </div>
                <div className="servicios-grid">
                    <div className="servicio servicio-especial">
                        <span>01</span>
                        <h3>Desarrollo web</h3>
                        <p>Webs con criterio de marca. Frontend en React, backend en Node. Código que respeta la identidad de la empresa.</p>
                    </div>
                    <div className="servicio servicio-corporativa">
                        <span>02</span>
                        <h3>Imagen corporativa</h3>
                        <p>Análisis y construcción de la imagen que proyecta tu marca.</p>
                    </div>
                    <div className="servicio servicio-diseño">
                        <span>03</span>
                        <h3>Diseño gráfico</h3>
                        <p>Identidades visuales, sistemas de marca y diseño editorial con intención y coherencia.</p>
                    </div>
                </div>
            </section>

         

            {/* Galería */}
            <GaleriaHome />

           {/* Stack */}
            <section className="stack">
                <div className="stack-cabecera">
                    <span className="etiqueta">Lo que uso</span>
                    <h2>Stack</h2>
                </div>
                <div className="stack-grid">
                    {STACK.map(grupo => (
                        <div key={grupo.id} className="stack-grupo">
                            <h3>{grupo.categoria}</h3>
                            <ul>
                                {grupo.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Opiniones */}
            <Opiniones />

            {/* CTA */}
            <section className="cta">
                <span className="etiqueta">¿Siguiente paso?</span>
                <h2>Hablemos</h2>
                <p>Si tienes un proyecto con personalidad, me interesa conocerlo.</p>
                <Link to="/contacto">Contactar</Link>
            </section>

        </main>
    );
}