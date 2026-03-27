import FormularioContacto from '../components/FormularioContacto';

export default function Contacto() {
    return (
        <main className="contacto">

            <div className="contacto-layout">

                <div className="contacto-info">
                    <span className="etiqueta">Contacto</span>
                    <h1>Hablemos</h1>
                    <p>Si tienes un proyecto con personalidad, me interesa conocerlo.</p>

                    <div className="contacto-datos">

                        <div className="dato">
                            <span className="etiqueta">Email</span>
                            <a href="mailto:angelaorcerz@gmail.com">angelaorcerz@angela.es</a>
                        </div>

                        <div className="dato">
                            <span className="etiqueta">Ubicación</span>
                            <span>Granada, España</span>
                        </div>

                        <div className="dato">
                            <span className="etiqueta">Disponibilidad</span>
                            <span>Freelance · Abierta a equipo</span>
                        </div>

                        <div className="dato">
                            <span className="etiqueta">Redes</span>
                            <ul className="contacto-redes">
                                <li><a href="linkedin.com/in/angelaorceraruiz" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                                <li><a href="https://www.instagram.com/h3ncoo?igsh=MXQ1Z25oNXQyaDl4bA==" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
                                <li><a href="https://github.com/aorceradw"   target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="contacto-formulario">
                    <FormularioContacto />
                </div>

            </div>

        </main>
    );
}