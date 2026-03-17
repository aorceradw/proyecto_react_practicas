import FormularioContacto from "../components/FormularioContacto";

export default function Contacto() {
    return (
        <main className="seccion-contacto">

            {/* Cabecera */}
            <header className="contacto-encabezado animar">
                <span className="etiqueta">Contacto</span>
                <h1 className="contacto-titulo-principal">Hablemos</h1>
                <p className="contacto-descripcion">
                    Si tienes un proyecto con personalidad, me interesa conocerlo.
                </p>
            </header>

            {/* Info de contacto */}
            <section className="contacto-informacion animar retraso-1">

                <article className="contacto-item-informacion">
                    <span className="etiqueta">Email</span>
                    <a
                        href="mailto:hola@angela.es"
                        className="contacto-enlace-email"
                    >
                        hola@angela.es
                    </a>
                </article>

                <article className="contacto-item-informacion">
                    <span className="etiqueta">Ubicación</span>
                    <span className="contacto-texto-detalle">Granada, España</span>
                </article>

                <article className="contacto-item-informacion">
                    <span className="etiqueta">Disponibilidad</span>
                    <span className="contacto-texto-detalle">Freelance · Abierta a equipo</span>
                </article>

                <article className="contacto-seccion-redes">
                    <span className="etiqueta">Redes</span>
                    <ul className="contacto-lista-redes">
                        <li>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contacto-enlace-red"
                            >
                                LinkedIn ↗
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contacto-enlace-red"
                            >
                                Instagram ↗
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://behance.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contacto-enlace-red"
                            >
                                Behance ↗
                            </a>
                        </li>
                    </ul>
                </article>

            </section>
            
            <section className="contacto-contenedor-formulario animar retraso-2">
                <FormularioContacto />
            </section>

        </main>
    );
}