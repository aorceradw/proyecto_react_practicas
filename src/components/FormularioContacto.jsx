import { useState } from 'react';

export default function FormularioContacto() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        empresa: '',
        tipo_solicitud: '',
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
                setFormulario({ nombre: '', email: '', empresa: '', tipo_solicitud: '', mensaje: '' });
                setTimeout(() => setEstado('idle'), 5000);
            } else {
                setEstado('error');
            }
        } catch {
            setEstado('error');
        }
    }

    return (
        <form id="formulario" onSubmit={enviarMensaje}>

            <div className="formulario-doble">
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formulario.email}
                        onChange={manejarCambio}
                        placeholder="hola@ejemplo.com"
                        required
                    />
                </div>
            </div>

            <div className="formulario-doble">
                <div className="campo">
                    <label htmlFor="empresa">Empresa o marca</label>
                    <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formulario.empresa}
                        onChange={manejarCambio}
                        placeholder="Opcional"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="tipo_solicitud">En qué puedo ayudarte</label>
                    <select
                        id="tipo_solicitud"
                        name="tipo_solicitud"
                        value={formulario.tipo_solicitud}
                        onChange={manejarCambio}
                        required
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="web">Desarrollo web</option>
                        <option value="imagen">Imagen corporativa</option>
                        <option value="branding">Diseño de marca</option>
                        <option value="grafico">Diseño gráfico</option>
                        <option value="asesoria">Asesoría de imagen</option>
                        <option value="otro">Otra cosa</option>
                    </select>
                </div>
            </div>

            <div className="campo">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                />
            </div>

            <button type="submit" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {estado === 'ok' && <p className="opiniones-ok">Mensaje enviado. Te respondo pronto.</p>}
            {estado === 'error' && <p className="opiniones-error">Algo falló. Inténtalo de nuevo.</p>}

        </form>
    );
}