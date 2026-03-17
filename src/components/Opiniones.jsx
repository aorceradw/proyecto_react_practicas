import { useState } from 'react';

const REVIEWS_FIJAS = [
    {
        id: 1,
        autor: "Nombre cliente",
        rol: "CEO — Empresa",
        cita: "Angela entiende la marca antes de escribir una sola línea de código. Técnica, directa y con una visión estética que marca la diferencia."
    },
    {
        id: 2,
        autor: "Nombre cliente",
        rol: "Directora — Identidad de marca",
        cita: "Combinar asesoría de imagen con desarrollo web nos dio una coherencia visual que antes no teníamos. Supo leer exactamente lo que necesitábamos."
    }
];

export default function Reviews() {
    const [formulario, setFormulario] = useState({
        autor: '',
        rol: '',
        cita: ''
    });
    const [estado, setEstado] = useState('idle'); 

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
                {REVIEWS_FIJAS.map((item, index) => (
                    <article
                        key={item.id}
                        className={`opinion animar retraso-${index + 1}`}
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
                ))}
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