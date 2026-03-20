import React from 'react';

const PROYECTOS = [
    {
        id: 1,
        ref: 'LOG_01',
        titulo: 'Logotipo Corporativo',
        año: '2025',
        src: '/images/LOGO.png',
        alt: 'Logo corporativo diseño minimalista',
        tamaño: 'grande'
    },
    {
        id: 2,
        ref: 'LOG_PUF',
        titulo: 'Identidad Puf',
        año: '2025',
        src: '/images/logopuf.png',
        alt: 'Identidad visual para Puf',
        tamaño: 'pequeño'
    },
    {
        id: 3,
        ref: 'MOCK_NK',
        titulo: 'Y2K Inspo - Nokia',
        año: '2024',
        src: '/images/nokia.jpg',
        alt: 'Mockup Nokia style visual inspiration',
        tamaño: 'mediano'
    },
    {
        id: 4,
        ref: 'MOCK_SH',
        titulo: 'Puf Shirt Design',
        año: '2025',
        src: '/images/pufshirt.png',
        alt: 'Mockup camiseta Puf',
        tamaño: 'pequeño'
    },
    {
        id: 5,
        ref: 'SOC_01',
        titulo: 'Post Redes Sociales',
        año: '2025',
        src: '/images/redessociales.jpg',
        alt: 'Diseño para redes sociales corporativas',
        tamaño: 'grande'
    },
    {
        id: 6,
        ref: 'EDT_01',
        titulo: 'Mugler Editorial 01',
        año: '2024',
        src: '/images/revista1.PNG',
        alt: 'Diseño editorial revista página 1',
        tamaño: 'mediano'
    },
    {
        id: 7,
        ref: 'EDT_02',
        titulo: 'Mugler Editorial 02',
        año: '2024',
        src: '/images/revista2.PNG',
        alt: 'Diseño editorial revista página 2',
        tamaño: 'grande'
    },
    {
        id: 8,
        ref: 'TOTE_01',
        titulo: 'Tote Bag Dark',
        año: '2025',
        src: '/images/totedarkpuf.png',
        alt: 'Mockup tote bag versión oscura',
        tamaño: 'pequeño'
    },
    {
        id: 9,
        ref: 'TOTE_02',
        titulo: 'Tote Bag Light',
        año: '2025',
        src: '/images/totepuf.png',
        alt: 'Mockup tote bag versión clara',
        tamaño: 'pequeño'
    },
    {
        id: 10,
        ref: 'MOCK_LV',
        titulo: 'La Vivienne - Inspo',
        año: '2025',
        src: '/images/lavivienne.jpg',
        alt: 'Inspiración visual Vivienne Westwood',
        tamaño: 'mediano'
    },
];

export default function GaleriaImagen() {
    
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

    const logotipos = PROYECTOS.filter(p => [1].includes(p.id));
    const branding = PROYECTOS.filter(p => [2, 4, 8, 9].includes(p.id));
    const editorial = PROYECTOS.filter(p => [6, 7].includes(p.id));
    const redes = PROYECTOS.filter(p => [5].includes(p.id));
    const carteleria = PROYECTOS.filter(p => [3, 10].includes(p.id));

    return (
        <div className="galeria-imagen-wrapper">
            {/* 0. Logotipos */}
            <div className="seccion-separadora animar" style={{ paddingTop: 0 }}>
                <h2 className="seccion-titulo-mini">Logotipos</h2>
            </div>
            {renderMosaico(logotipos)}

            {/* 1. Branding y Mockups */}
            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Branding y mockups</h2>
                <p className="seccion-descripcion">
                    La marca es de la serie de ficción "Aquí no hay quien viva", inspirada en PUF (Paloma Urvan Fashion).
                </p>
            </div>
            {renderMosaico(branding)}

            {/* 2. Editorial */}
            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Diseño editorial</h2>
                <p className="seccion-descripcion">
                    Investigación sobre Mugler y cómo el arte, la moda, el diseño y la creatividad me han inspirado siempre.
                </p>
            </div>
            {renderMosaico(editorial)}

            {/* 3. Redes Sociales */}
            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Redes sociales</h2>
                <p className="seccion-descripcion">
                    Imagen para post de redes sociales.
                </p>
            </div>
            {renderMosaico(redes)}

            {/* 4. Carteles / Inspo */}
            <div className="seccion-separadora animar">
                <hr className="separador-linea" />
                <h2 className="seccion-titulo-mini">Carteles publicitarios</h2>
                <p className="seccion-descripcion">
                    Carteles publicitarios como inspos, hablando de la inspiración Y2K.
                </p>
            </div>
            {renderMosaico(carteleria)}
        </div>
    );
}