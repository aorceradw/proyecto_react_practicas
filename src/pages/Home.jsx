import Hero from "../components/Hero";
import Opiniones from "../components/Opiniones";

export default function Home() {
    return (
        <main className="home">
            <Hero />

            <section className="galeria-home">
                <div className="galeria-home-cabecera">
                    <span className="etiqueta">Archivo visual</span>
                    <h2 className="galeria-home-titulo">Trabajo</h2>
                </div>

                <ul className="galeria-home-lista">
                    <li className="galeria-home-item galeria-home-item--ancho">
                        <img
                            src="/fotos/proyecto-01.jpg"
                            alt="Proyecto 01"
                            className="galeria-home-imagen"
                        />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Ver proyecto</span>
                        </div>
                    </li>
                    <li className="galeria-home-item galeria-home-item--medio">
                        <img
                            src="/fotos/proyecto-02.jpg"
                            alt="Proyecto 02"
                            className="galeria-home-imagen"
                        />
                        <div className="galeria-home-overlay">
                            <span className="galeria-home-overlay-texto">Ver proyecto</span>
                        </div>
                    </li>
                    <li className="galeria-home-item galeria-home-item--total">
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
            </section>

            <Opiniones />

        </main>
    );
}