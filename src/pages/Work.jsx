import { useState, lazy, Suspense } from 'react';

// Lazy loading of heavy gallery components
const GaleriaDiseño = lazy(() => import('../components/Galeriadiseño'));
const GaleriaWeb    = lazy(() => import('../components/Galeriaweb'));
const GaleriaImagen = lazy(() => import('../components/Galeriaimagen'));

const CATEGORIAS = [
    { id: 'diseno',  etiqueta: 'Diseño gráfico' },
    { id: 'web',     etiqueta: 'Desarrollo web' },
    { id: 'imagen',  etiqueta: 'Imagen corporativa' },
];

export default function Work() {
    const [activa, setActiva] = useState('diseno');

    return (
        <main className="trabajos">

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
                <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
                    {activa === 'diseno'  && <GaleriaDiseño />}
                    {activa === 'web'     && <GaleriaWeb />}
                    {activa === 'imagen'  && <GaleriaImagen />}
                </Suspense>
            </div>

        </main>
    );
}
