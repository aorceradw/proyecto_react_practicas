const LOGOTIPOS = [
    { id: 1, titulo: 'Logotipo Corporativo', img: '/images/LOGO.png' },
];

const BRANDING = [
    { id: 3, titulo: 'Puf Shirt Design', img: '/images/pufshirt.png' },
    { id: 4, titulo: 'Tote Bag Dark', img: '/images/totedarkpuf.png' },
    { id: 5, titulo: 'Tote Bag Light', img: '/images/totepuf.png' },
    { id: 2, titulo: 'Identidad Puf', img: '/images/logopuf.png' },
];

const EDITORIAL = [
    { id: 6, titulo: 'Mugler Editorial 01', img: '/images/revista1.PNG' },
    { id: 7, titulo: 'Mugler Editorial 02', img: '/images/revista2.PNG' },
];

const REDES = [
    { id: 8, titulo: 'Post Redes Sociales', img: '/images/redessociales.jpg' },
];

const CARTELES = [
    { id: 9, titulo: 'Y2K Inspo — Nokia', img: '/images/nokia.jpg' },
    { id: 10, titulo: 'La Vivienne — Inspo', img: '/images/lavivienne.jpg' },
    { id: 11, titulo: 'Modela', img: '/images/MARCAS.jpg' },

];

import { useState } from 'react';
import ClickImagen from './ClickImagen';

export default function GaleriaImagen() {
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    return (
        <div className="galeria-imagen">

            {fotoSeleccionada && (
                <ClickImagen
                    imagen={fotoSeleccionada}
                    onClose={() => setFotoSeleccionada(null)}
                />
            )}

            <section className="galeria-seccion">
                <h2>Logotipos</h2>
                <div className="galeria-grid grid-unico">
                    {LOGOTIPOS.map(p => (
                        <figure key={p.id} className={p.img.includes('LOGO') || p.img.includes('star') || p.img.includes('logopuf') ? 'no-border' : ''}>
                            <img
                                src={p.img}
                                alt={p.titulo}
                                onClick={() => setFotoSeleccionada(p)}
                                className={p.img.includes('LOGO') || p.img.includes('star') || p.img.includes('logopuf') ? 'img-contain' : ''}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="galeria-seccion">
                <h2>Branding y mockups</h2>
                <p>Marca ficticia PUF inspirada en la serie "Aquí no hay quien viva".</p>
                <div className="galeria-grid">
                    {BRANDING.map(p => (
                        <figure key={p.id} className={p.img.includes('logopuf') ? 'no-border' : ''}>
                            <img
                                src={p.img}
                                alt={p.titulo}
                                onClick={() => setFotoSeleccionada(p)}
                                className={p.img.includes('logopuf') ? 'img-contain' : ''}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="galeria-seccion">
                <h2>Diseño editorial</h2>
                <p>Investigación sobre Mugler — moda, arte y creatividad como inspiración.</p>
                <div className="galeria-grid">
                    {EDITORIAL.map(p => (
                        <figure key={p.id} className="fig-alargada">
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
                <h2>Redes sociales</h2>
                <div className="galeria-grid grid-unico">
                    {REDES.map(p => (
                        <figure key={p.id} className={p.img.includes('star') || p.img.includes('LOGO') || p.img.includes('logopuf') ? 'no-border' : ''}>
                            <img
                                src={p.img}
                                alt={p.titulo}
                                onClick={() => setFotoSeleccionada(p)}
                                className={p.img.includes('LOGO') || p.img.includes('star') || p.img.includes('logopuf') ? 'img-contain' : ''}
                            />
                            <figcaption>{p.titulo}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="galeria-seccion">
                <h2>Carteles</h2>
                <p>Inspiración Y2K aplicada al diseño publicitario.</p>
                <div className="galeria-grid">
                    {CARTELES.map(p => (
                        <figure key={p.id} className={p.img.includes('star') || p.img.includes('LOGO') ? 'no-border' : ''}>
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

        </div>
    );
}