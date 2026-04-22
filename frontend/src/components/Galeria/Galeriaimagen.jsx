const LOGOTIPOS = [
    { id: 1, titulo: 'Logotipo Corporativo', img: new URL('../../assets/images/LOGO.png', import.meta.url).href },
];

const BRANDING = [
    { id: 3, titulo: 'Puf Shirt Design', img: new URL('../../assets/images/pufshirt.png', import.meta.url).href },
    { id: 4, titulo: 'Tote Bag Dark', img: new URL('../../assets/images/totedarkpuf.png', import.meta.url).href },
    { id: 5, titulo: 'Tote Bag Light', img: new URL('../../assets/images/totepuf.png', import.meta.url).href },
    { id: 2, titulo: 'Identidad Puf', img: new URL('../../assets/images/logopuf.png', import.meta.url).href },
];

const EDITORIAL = [
    { id: 6, titulo: 'Mugler Editorial 01', img: new URL('../../assets/images/revista1.webp', import.meta.url).href },
    { id: 7, titulo: 'Mugler Editorial 02', img: new URL('../../assets/images/revista2.webp', import.meta.url).href },
];

const REDES = [
    { id: 8, titulo: 'Post Redes Sociales', img: new URL('../../assets/images/redessociales.jpg', import.meta.url).href },
];

const CARTELES = [
    { id: 9, titulo: 'Y2K Inspo — Nokia', img: new URL('../../assets/images/nokia.webp', import.meta.url).href },
    { id: 10, titulo: 'La Vivienne — Inspo', img: new URL('../../assets/images/lavivienne.webp', import.meta.url).href },
    { id: 11, titulo: 'Modela', img: new URL('../../assets/images/MARCAS.webp', import.meta.url).href },
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