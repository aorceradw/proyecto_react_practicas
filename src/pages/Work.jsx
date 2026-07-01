import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import GaleriaDiseño from '../components/Galeriadiseño';
import GaleriaWeb    from '../components/Galeriaweb';
import GaleriaImagen from '../components/Galeriaimagen';

const variantes = {
    inicial: { opacity: 0, y: 18 },
    entrar:  { opacity: 1, y: 0,   transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    salir:   { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

const CATEGORIAS = [
    { id: 'diseno',  etiqueta: 'Diseño gráfico' },
    { id: 'web',     etiqueta: 'Desarrollo web' },
    { id: 'imagen',  etiqueta: 'Imagen corporativa' },
];

export default function Work() {
    const [activa, setActiva] = useState('diseno');

    return (
        <Motion.main className="trabajos" variants={variantes} initial="inicial" animate="entrar" exit="salir">

            <div className="trabajos-cabecera">
                <span className="etiqueta">Archivo de trabajo</span>
                <h1>Proyectos</h1>
            </div>

            <nav className="trabajos-filtros">
                {CATEGORIAS.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiva(cat.id)}
                        className={activa === cat.id ? 'activo' : ''}
                    >
                        {cat.etiqueta}
                    </button>
                ))}
            </nav>

          <p className="trabajos-hint">Pincha sobre los trabajos para experimentar con ellos </p>

            <div className="trabajos-galeria">
                {activa === 'diseno'  && <GaleriaDiseño />}
                {activa === 'web'     && <GaleriaWeb />}
                {activa === 'imagen'  && <GaleriaImagen />}
            </div>

        </Motion.main>
    );
}