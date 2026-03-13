import { useState } from 'react';

export default function Form() {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        empresa: '',
        tipo_solicitud: 'freelance',
        mensaje: ''
    });
    const [estado, setEstado] = useState({ enviando: false, exito: false, error: null });

    const manejarCambio = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setEstado({ enviando: true, exito: false, error: null });

        try {
            const respuesta = await fetch('http://localhost:3001/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            if (respuesta.ok) {
                setEstado({ enviando: false, exito: true, error: null });
                setDatos({ nombre: '', email: '', empresa: '', tipo_solicitud: 'freelance', mensaje: '' });
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            setEstado({ enviando: false, exito: false, error: 'No se pudo conectar con el servidor.' });
        }
    };

    return (
        <section id="contacto" className="seccion entrar">
            <div className="caja">
                <span className="detalle-sigilo">COLABORACIONES PROFESIONALES</span>
                <h2 className="brillo mt-m mb-l">HABLEMOS_DE_NEGOCIOS</h2>
                
                <form className="formulario" onSubmit={manejarEnvio}>
                    <div className="grid-2">
                        <div className="campo">
                            <span className="detalle-sigilo">NOMBRE COMPLETO</span>
                            <input 
                                className="entrada" 
                                type="text" 
                                name="nombre"
                                value={datos.nombre}
                                onChange={manejarCambio}
                                placeholder="Angela..." 
                                required
                            />
                        </div>
                        <div className="campo">
                            <span className="detalle-sigilo">EMAIL PROFESIONAL</span>
                            <input 
                                className="entrada" 
                                type="email" 
                                name="email"
                                value={datos.email}
                                onChange={manejarCambio}
                                placeholder="angela@empresa.com" 
                                required
                            />
                        </div>
                    </div>

                    <div className="grid-2 mt-m">
                        <div className="campo">
                            <span className="detalle-sigilo">EMPRESA / ORGANIZACIÓN</span>
                            <input 
                                className="entrada" 
                                type="text" 
                                name="empresa"
                                value={datos.empresa}
                                onChange={manejarCambio}
                                placeholder="TU EMPRESA..." 
                            />
                        </div>
                        <div className="campo">
                            <span className="detalle-sigilo">TIPO DE SOLICITUD</span>
                            <select 
                                className="selector" 
                                name="tipo_solicitud"
                                value={datos.tipo_solicitud}
                                onChange={manejarCambio}
                            >
                                <option value="freelance">PROYECTO FREELANCE</option>
                                <option value="contract">OPORTUNIDAD LABORAL</option>
                                <option value="collab">COLABORACIÓN ESTRATÉGICA</option>
                                <option value="other">OTRAS CONSULTAS</option>
                            </select>
                        </div>
                    </div>

                    <div className="campo mt-m">
                        <span className="detalle-sigilo">DETALLES DE LA PROPUESTA</span>
                        <textarea 
                            className="area-texto" 
                            name="mensaje"
                            value={datos.mensaje}
                            onChange={manejarCambio}
                            rows="3" 
                            placeholder="DESCRIBE BREVEMENTE TU VISIÓN O REQUERIMIENTOS..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="boton mt-m" disabled={estado.enviando}>
                        {estado.enviando ? 'ENVIANDO...' : 'Enviar Propuesta'}
                    </button>

                    {estado.exito && (
                        <p className="mt-m" style={{ color: 'var(--rosa-metal)' }}>
                            ¡Mensaje guardado con éxito! Me pondré en contacto pronto.
                        </p>
                    )}
                    {estado.error && (
                        <p className="mt-m" style={{ color: '#ff4d4d' }}>
                            {estado.error} (¿Está el servidor encendido?)
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}