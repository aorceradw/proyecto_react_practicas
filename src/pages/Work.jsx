import { useState } from 'react';
import GaleriaDiseño from '../components/Galeriadiseño';
import GaleriaWeb from '../components/Galeriaweb';
import GaleriaImagen from '../components/Galeriaimagen';

const CATEGORIAS = [
    { clave: 'diseño', etiqueta: 'Diseño gráfico' },
    { clave: 'web', etiqueta: 'Desarrollo web' },
    { clave: 'imagen', etiqueta: 'Imagen corporativa' },
];

export default function Work() {
    const [activa, setActiva] = useState('diseño');

    return (
        <main className="trabajos">

            <div className="trabajos-cabecera animar">
                <span className="etiqueta">Archivo de trabajo</span>
                <h1 className="trabajos-titulo">Proyectos</h1>
            </div>

            <nav className="trabajos-filtros animar retraso-1">
                {CATEGORIAS.map(cat => (
                    <button
                        key={cat.clave}
                        className={`filtro-boton ${activa === cat.clave ? 'filtro-activo' : ''}`}
                        onClick={() => setActiva(cat.clave)}
                    >
                        {cat.etiqueta}
                    </button>
                ))}
            </nav>

            <div className="trabajos-galeria">
                {activa === 'diseño'  && <GaleriaDiseño />}
                {activa === 'web'     && <GaleriaWeb />}
                {activa === 'imagen'  && <GaleriaImagen />}
            </div>

        </main>
    );
}