const SERIES_VW = [
    { id: 1, titulo: 'V&W Identity',  img: '/images/DESIGNWAPO.jpg' },
    { id: 2, titulo: 'V&W Series 04', img: '/images/vw4.jpg' },
    { id: 3, titulo: 'V&W Series 03', img: '/images/vw3.jpg' },
    { id: 4, titulo: 'V&W Series 01', img: '/images/vw1.jpg' },
];

const ELEMENTOS_3D = [
    { id: 5, titulo: 'Logotipo Corporativo', img: '/images/LOGO.png' },
    { id: 6, titulo: 'Recurso Gráfico', img: '/images/recurso.png' },
    { id: 7, titulo: 'Star Element',    img: '/images/star.png' },
];

const CARTELERIA = [
    { id: 8, titulo: 'Poster Design', img: '/images/poster.png' },
    { id: 9, titulo: 'Never Give Up', img: '/images/nevergive.PNG' },
    { id: 10, titulo: 'Modela', img: '/images/model2.jpg' },
];

import { useState } from 'react';
import ClickImagen from './ClickImagen';

export default function GaleriaDiseño() {
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    return (
        <div className="galeria-diseno">

            {fotoSeleccionada && (
                <ClickImagen 
                    imagen={fotoSeleccionada} 
                    onClose={() => setFotoSeleccionada(null)} 
                />
            )}

            <section className="galeria-seccion">
                <h2>Misma identidad, distintos formatos</h2>
                <p>Exploración de un mismo concepto visual aplicado a diferentes soportes.</p>
                <div className="galeria-grid">
                    {SERIES_VW.map(p => (
                        <figure key={p.id}>
                            <img 
                                src={p.img} 
                                alt={p.titulo} 
                                onClick={() => setFotoSeleccionada(p)}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="galeria-seccion">
                <h2>Elementos 3D</h2>
                <p>Recursos tridimensionales para aportar profundidad visual.</p>
                <div className="galeria-grid">
                    {ELEMENTOS_3D.map(p => (
                        <figure key={p.id} className={p.img.includes('LOGO') || p.img.includes('star') || p.img.includes('logopuf') ? 'no-border' : ''}>
                            <img 
                                src={p.img} 
                                alt={p.titulo} 
                                onClick={() => setFotoSeleccionada(p)}
                                className={p.img.includes('LOGO') || p.img.includes('star') ? 'img-contain' : ''}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="galeria-seccion">
                <h2>Cartelería</h2>
                <p>Composición tipográfica y visual a través del diseño de pósters.</p>
                <div className="galeria-grid">
                    {CARTELERIA.map(p => (
                        <figure key={p.id}>
                            <img 
                                src={p.img} 
                                alt={p.titulo} 
                                onClick={() => setFotoSeleccionada(p)}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

        </div>
    );
}