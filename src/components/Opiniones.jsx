import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function Opiniones() {
    const [opiniones, setOpiniones] = useState([]);
    const [form, setForm]           = useState({ autor: '', rol: '', cita: '' });
    const [estado, setEstado]       = useState('idle');
    const [cargando, setCargando]   = useState(true);

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
                    <article key={opinion.id} className="opinion">
                        <blockquote>"{opinion.cita}"</blockquote>
                        <div className="opinion-autor">
                            <span>{opinion.autor}</span>
                            {opinion.rol && <span>{opinion.rol}</span>}
                        </div>
                    </article>
                ))}
            </div>

            <div className="opiniones-form-wrapper">
                <span className="etiqueta">Deja tu opinión</span>
                <h3>¿Trabajamos junt@s?</h3>

                <form onSubmit={handleSubmit}>
                    <div className="campo">
                        <label htmlFor="autor">Nombre</label>
                        <input type="text" id="autor" name="autor" value={form.autor} onChange={handleChange} placeholder="Tu nombre" required />
                    </div>

                    <div className="campo">
                        <label htmlFor="rol">Cargo o empresa</label>
                        <input type="text" id="rol" name="rol" value={form.rol} onChange={handleChange} placeholder="CEO — Empresa" />
                    </div>

                    <div className="campo">
                        <label htmlFor="cita">Tu opinión</label>
                        <textarea id="cita" name="cita" value={form.cita} onChange={handleChange} placeholder="Cuéntame tu experiencia..." required />
                    </div>

                    <button type="submit" disabled={estado === 'enviando'}>
                        {estado === 'enviando' ? 'Enviando...' : 'Enviar'}
                    </button>

                    {estado === 'ok'    && <p className="mensaje-ok">Opinión enviada. Gracias.</p>}
                    {estado === 'error' && <p className="mensaje-error">Algo falló. Inténtalo de nuevo.</p>}
                </form>
            </div>

        </section>
    );
}