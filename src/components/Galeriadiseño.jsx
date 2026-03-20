import React from 'react';

const PROYECTOS = [
    {
        id: 9,
        ref: 'VW_MAIN',
        titulo: 'V&W Identity',
        año: '2025',
        src: '/images/DESIGNWAPO.jpg',
        alt: 'Diseño de identidad visual V&W',
        tamaño: 'grande'
    },
    {
        id: 1,
        ref: 'POST_01',
        titulo: 'Poster Design',
        año: '2025',
        src: '/images/poster.png',
        alt: 'Diseño de poster conceptual',
        tamaño: 'grande'
    },
    {
        id: 2,
        ref: 'VW_04',
        titulo: 'V&W Series 04',
        año: '2025',
        src: '/images/vw4.jpg',
        alt: 'Proyecto V&W parte 4',
        tamaño: 'mediano'
    },
    {
        id: 3,
        ref: 'VW_03',
        titulo: 'V&W Series 03',
        año: '2025',
        src: '/images/vw3.jpg',
        alt: 'Proyecto V&W parte 3',
        tamaño: 'pequeño'
    },
    {
        id: 4,
        ref: 'VW_02',
        titulo: 'V&W Series 02',
        año: '2025',
        src: '/images/vw2.jpg',
        alt: 'Proyecto V&W parte 2',
        tamaño: 'pequeño'
    },
    {
        id: 5,
        ref: 'VW_01',
        titulo: 'V&W Series 01',
        año: '2025',
        src: '/images/vw1.jpg',
        alt: 'Proyecto V&W parte 1',
        tamaño: 'grande'
    },
    {
        id: 6,
        ref: 'STR_01',
        titulo: 'Star Element',
        año: '2024',
        src: '/images/star.png',
        alt: 'Recurso gráfico estrella',
        tamaño: 'pequeño'
    },
    {
        id: 7,
        ref: 'REC_01',
        titulo: 'Recurso Gráfico',
        año: '2024',
        src: '/images/recurso.png',
        alt: 'Elemento de diseño gráfico',
        tamaño: 'mediano'
    },
    {
        id: 8,
        ref: 'NG_01',
        titulo: 'Never Give Up',
        año: '2024',
        src: '/images/nevergive.PNG',
        alt: 'Diseño tipográfico Never Give Up',
        tamaño: 'mediano'
    },
];

export default function GaleriaDiseño() {
    
    const renderMosaico = (items) => (
        <div className="mosaico animar">
            {items.map(proyecto => (
                <article
                    key={proyecto.id}
                    className={`mosaico-item mosaico-item--${proyecto.tamaño}`}
                >
                    <div className="mosaico-imagen-contenedor">
                        <img
                            src={proyecto.src}
                            alt={proyecto.alt}
                            className="mosaico-imagen"
                        />
                        <div className="mosaico-escaner" />
                        <div className="mosaico-grain" />
                    </div>
                  
                    <div className="mosaico-meta">
                        <span className="mosaico-ref">{proyecto.ref}</span>
                        <span className="mosaico-titulo-item">{proyecto.titulo}</span>
                        <span className="mosaico-año">{proyecto.año}</span>
                    </div>
                </article>
            ))}
        </div>
    );

    const vwSeries = PROYECTOS.filter(p => [9, 2, 3, 4, 5].includes(p.id));
    const elementos3D = PROYECTOS.filter(p => [6, 7].includes(p.id));
    const carteleria = PROYECTOS.filter(p => [1, 8].includes(p.id));

    return (
        <div className="galeria-diseno-wrapper">
            <div className="seccion-separadora animar" style={{ paddingTop: 0 }}>
                <h2 className="seccion-titulo-mini">Misma identidad, diferentes versiones</h2>
                <p className="seccion-descripcion">
                    Exploración de un mismo concepto visual aplicado a diferentes formatos y soportes.
                </p>
            </div>
            {renderMosaico(vwSeries)}

            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Elementos en 3D</h2>
                <p className="seccion-descripcion">
                    Recursos y elementos tridimensionales diseñados para aportar profundidad.
                </p>
            </div>
            {renderMosaico(elementos3D)}

            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Cartelería</h2>
                <p className="seccion-descripcion">
                    Selección de trabajos de cartelería donde se explora la composición visual y la tipografía a través del diseño de pósters.
                </p>
            </div>
            {renderMosaico(carteleria)}
        </div>
    );
}