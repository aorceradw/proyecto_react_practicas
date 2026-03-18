import { useState } from 'react';

export default function FormularioContacto() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [estado, setEstado] = useState('idle');

    function manejarCambio(e) {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }

    async function enviarMensaje(e) {
        e.preventDefault();
        setEstado('enviando');

        try {
            const res = await fetch('http://localhost:3001/api/contactos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formulario)
            });

            if (res.ok) {
                setEstado('ok');
                setFormulario({ nombre: '', email: '', mensaje: '' });
                setTimeout(() => setEstado('idle'), 5000);
            } else {
                setEstado('error');
            }
        } catch {
            setEstado('error');
        }
    }

    return (
        <form className="formulario-contacto" onSubmit={enviarMensaje}>
            <div className="formulario-grupo">
                <label htmlFor="nombre" className="formulario-etiqueta">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    className="formulario-input"
                    placeholder="Tu nombre completo"
                    required
                />
            </div>

            <div className="formulario-grupo">
                <label htmlFor="email" className="formulario-etiqueta">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={manejarCambio}
                    className="formulario-input"
                    placeholder="hola@ejemplo.com"
                    required
                />
            </div>

            <div className="formulario-grupo">
                <label htmlFor="mensaje" className="formulario-etiqueta">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    className="formulario-input formulario-textarea"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows="5"
                    required
                ></textarea>
            </div>

            <button type="submit" className="formulario-boton" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {estado === 'ok' && (
                <p style={{marginTop: '1rem', color: '#4caf50', textAlign: 'center'}}>Mensaje enviado con éxito. Te responderé pronto.</p>
            )}
            {estado === 'error' && (
                <p style={{marginTop: '1rem', color: '#f44336', textAlign: 'center'}}>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
            )}
        </form>
    );
}
