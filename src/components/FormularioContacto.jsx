import { useState } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function FormularioContacto() {
    const [formulario, setFormulario] = useState({
        nombre: '', email: '', empresa: '', tipo_solicitud: '', mensaje: ''
    });
    const [estado, setEstado] = useState('idle');

    function manejarCambio(e) {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }

    async function enviarMensaje(e) {
        e.preventDefault();
        setEstado('enviando');
        try {
            const res = await fetch(`${API}/api/contactos`, {
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
        <div className="formulario cyber-panel">
            <div className="scanline"></div>
            <div className="form-content-inner">
                <form id="formulario" onSubmit={enviarMensaje} className="form-shinka">

                    <div className="form-fila-shinka">
                        <div className="campo">
                            <label htmlFor="nombre"><span className="slash">/</span>Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} placeholder="Tu nombre" required />
                        </div>
                        <div className="campo">
                            <label htmlFor="email"><span className="slash">/</span>Email</label>
                            <input type="email" id="email" name="email" value={formulario.email} onChange={manejarCambio} placeholder="hola@ejemplo.com" required />
                        </div>
                    </div>

                    <div className="form-fila-shinka">
                        <div className="campo">
                            <label htmlFor="empresa"><span className="slash">/</span>Empresa o marca</label>
                            <input type="text" id="empresa" name="empresa" value={formulario.empresa} onChange={manejarCambio} placeholder="Opcional" />
                        </div>
                        <div className="campo">
                            <label htmlFor="tipo_solicitud"><span className="slash">/</span>Tipo de solicitud</label>
                            <select id="tipo_solicitud" name="tipo_solicitud" value={formulario.tipo_solicitud} onChange={manejarCambio} required>
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
                        <label htmlFor="mensaje"><span className="slash">/</span>Mensaje</label>
                        <textarea id="mensaje" name="mensaje" value={formulario.mensaje} onChange={manejarCambio} placeholder="Cuéntame sobre tu proyecto..." required />
                    </div>

                    <div className="form-footer-shinka">
                        <button type="submit" disabled={estado === 'enviando'} className="btn-shinka">
                            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                        
                        {estado === 'ok'    && <p className="mensaje-ok">Mensaje enviado. Te respondo pronto.</p>}
                        {estado === 'error' && <p className="mensaje-error">Algo falló. Inténtalo de nuevo.</p>}
                    </div>

                </form>
            </div>
        </div>
    );
}