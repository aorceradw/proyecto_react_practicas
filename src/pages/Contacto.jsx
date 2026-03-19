import FormularioContacto from "../components/FormularioContacto";

export default function Contacto() {
    return (
        <main className="pagina-contacto">

            <div className="contacto-layout">

                {/* Columna izquierda — info */}
                <div className="contacto-info animar">
                    <span className="etiqueta">Contacto</span>
                    <h1 className="contacto-titulo">Hablemos</h1>
                    <p className="contacto-descripcion">
                        Si tienes un proyecto con personalidad, me interesa conocerlo.
                    </p>

                    <div className="contacto-datos">
                        <div className="contacto-dato">
                            <span className="etiqueta">Email</span>
                            <a href="mailto:hola@angela.es" className="contacto-enlace">
                                hola@angela.es
                            </a>
                        </div>

                        <div className="contacto-dato">
                            <span className="etiqueta">Ubicación</span>
                            <span className="contacto-detalle">Granada, España</span>
                        </div>

                        <div className="contacto-dato">
                            <span className="etiqueta">Disponibilidad</span>
                            <span className="contacto-detalle">Freelance · Abierta a equipo</span>
                        </div>

                        <div className="contacto-dato">
                            <span className="etiqueta">Redes</span>
                            <ul className="contacto-redes">
                                <li>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contacto-enlace">
                                        LinkedIn ↗
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contacto-enlace">
                                        Instagram ↗
                                    </a>
                                </li>
                                <li>
                                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contacto-enlace">
                                        Behance ↗
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Columna derecha — formulario */}
                <div className="contacto-formulario animar retraso-1">
                    <FormularioContacto />
                </div>

            </div>

        </main>
    );
}