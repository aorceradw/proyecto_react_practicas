import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function Opiniones() {
    const [opiniones, setOpiniones] = useState([]);
    const [form, setForm] = useState({ autor: '', rol: '', cita: '' });
    const [estado, setEstado] = useState('idle');
    const [cargando, setCargando] = useState(true);

    const cargarOpiniones = async () => {
        try {
            const res = await fetch(`${API}/api/opiniones`);
            if (res.ok) setOpiniones(await res.json());
        } catch (error) {
            console.error('Error al cargar opiniones:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarOpiniones();
    }, []);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setEstado('enviando');
        try {
            const res = await fetch(`${API}/api/opiniones`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setEstado('ok');
                setForm({ autor: '', rol: '', cita: '' });
                cargarOpiniones();
                setTimeout(() => setEstado('idle'), 5000);
            } else {
                setEstado('error');
            }
        } catch {
            setEstado('error');
        }
    }

    return (
        <section className="opiniones">

            <div className="opiniones-cabecera">
                <span className="etiqueta">Colaboraciones</span>
                <h2>Lo que dicen</h2>
            </div>

            <div className="opiniones-lista">
                {cargando && <p>Cargando...</p>}

                {!cargando && opiniones.length === 0 && (
                    <p>Aún no hay opiniones. ¡Sé la primera!</p>
                )}

                {opiniones.map(opinion => (
                    <article key={opinion.id} className="opinion cyber-panel">
                        <div className="scanline"></div>
                        <blockquote>"{opinion.cita}"</blockquote>
                        <div className="opinion-autor">
                            <span>{opinion.autor}</span>
                            {opinion.rol && <span>{opinion.rol}</span>}
                        </div>
                    </article>
                ))}
            </div>

            <div className="opiniones-form-seccion cyber-panel">
                <div className="scanline"></div>
                <div className="form-content-inner">
                    <span className="etiqueta">Colaboración</span>
                    <h3>Cuenta tu experiencia</h3>

                    <form onSubmit={handleSubmit} className="form-shinka">
                        <div className="campo">
                            <label htmlFor="autor"><span className="slash">/</span>Nombre</label>
                            <input type="text" id="autor" name="autor" value={form.autor} onChange={handleChange} placeholder="Tu nombre" required />
                        </div>

                        <div className="campo">
                            <label htmlFor="rol"><span className="slash">/</span>Cargo — Empresa</label>
                            <input type="text" id="rol" name="rol" value={form.rol} onChange={handleChange} placeholder="Tu cargo o empresa" />
                        </div>

                        <div className="campo">
                            <label htmlFor="cita"><span className="slash">/</span>Opinión</label>
                            <textarea id="cita" name="cita" value={form.cita} onChange={handleChange} placeholder="Cuéntame tu experiencia..." required />
                        </div>

                        <div className="form-footer-shinka">
                            <button type="submit" disabled={estado === 'enviando'} className="btn-shinka">
                                {estado === 'enviando' ? 'Enviando...' : 'Enviar opinión'}
                            </button>
                            
                            {estado === 'ok' && <p className="mensaje-ok">Opinión recibida. ¡Gracias!</p>}
                            {estado === 'error' && <p className="mensaje-error">Error al enviar. Inténtalo de nuevo.</p>}
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}