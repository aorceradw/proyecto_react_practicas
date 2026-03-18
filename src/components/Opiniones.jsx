import { useState, useEffect } from 'react';

export default function Reviews() {
    const [opiniones, setOpiniones] = useState([]);
    const [formulario, setFormulario] = useState({
        autor: '',
        rol: '',
        cita: ''
    });
    const [estado, setEstado] = useState('idle');
    const [cargando, setCargando] = useState(true);

    // Cargar opiniones desde el backend
    const cargarOpiniones = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/opiniones');
            if (res.ok) {
                const data = await res.json();
                setOpiniones(data);
            }
        } catch (error) {
            console.error('Error al cargar opiniones:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarOpiniones();
    }, []);

    function manejarCambio(e) {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }

    async function enviarOpinion(e) {
        e.preventDefault();
        setEstado('enviando');

        try {
            const res = await fetch('http://localhost:3001/api/opiniones', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formulario)
            });

            if (res.ok) {
                setEstado('ok');
                setFormulario({ autor: '', rol: '', cita: '' });
                cargarOpiniones(); // Recargar la lista
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
                <h2 className="opiniones-titulo">Lo que dicen</h2>
            </div>

            <div className="opiniones-lista">
                {cargando ? (
                    <p style={{ color: '#fff' }}>Cargando opiniones...</p>
                ) : opiniones.length > 0 ? (
                    opiniones.map((item, index) => (
                        <article
                            key={item.id}
                            className={`opinion animar retraso-${(index % 3) + 1}`}
                        >
                            <span className="opinion-marcador">☆</span>
                            <div className="opinion-contenido">
                                <blockquote className="opinion-cita">
                                    "{item.cita}"
                                </blockquote>
                                <div className="opinion-meta">
                                    <span className="opinion-autor">{item.autor}</span>
                                    <span className="opinion-rol">{item.rol}</span>
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                    <p style={{ color: '#aaa', fontStyle: 'italic' }}>Aún no hay opiniones. ¡Sé la primera persona en dejar una!</p>
                )}
            </div>

            <div className="opiniones-formulario">
                <div className="opiniones-formulario-cabecera">
                    <span className="etiqueta">Deja tu opinión</span>
                    <h3 className="opiniones-formulario-titulo">¿Trabajamos junt@s?</h3>
                </div>

                <form className="opiniones-form" onSubmit={enviarOpinion}>
                    <div className="campo">
                        <label htmlFor="autor">Nombre</label>
                        <input
                            type="text"
                            id="autor"
                            name="autor"
                            value={formulario.autor}
                            onChange={manejarCambio}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="rol">Cargo o empresa</label>
                        <input
                            type="text"
                            id="rol"
                            name="rol"
                            value={formulario.rol}
                            onChange={manejarCambio}
                            placeholder="CEO — Empresa"
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="cita">Tu opinión</label>
                        <textarea
                            id="cita"
                            name="cita"
                            value={formulario.cita}
                            onChange={manejarCambio}
                            placeholder="Cuéntame tu experiencia..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="opiniones-boton"
                        disabled={estado === 'enviando'}
                    >
                        {estado === 'enviando' ? 'Enviando...' : 'Enviar opinión'}
                    </button>

                    {estado === 'ok' && (
                        <p className="opiniones-ok">Opinión enviada. Gracias.</p>
                    )}
                    {estado === 'error' && (
                        <p className="opiniones-error">Algo falló. Inténtalo de nuevo.</p>
                    )}
                </form>
            </div>

        </section>
    );
}