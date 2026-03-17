const PROYECTOS = [
    {
        id: 1,
        ref: 'IMG_001',
        titulo: 'Identidad corporativa 01',
        año: '2025',
        src: '/fotos/imagen-01.jpg',
        alt: 'Proyecto de imagen corporativa 01',
        tamaño: 'grande'
    },
    {
        id: 2,
        ref: 'IMG_002',
        titulo: 'Identidad corporativa 02',
        año: '2025',
        src: '/fotos/imagen-02.jpg',
        alt: 'Proyecto de imagen corporativa 02',
        tamaño: 'pequeño'
    },
    {
        id: 3,
        ref: 'IMG_003',
        titulo: 'Identidad corporativa 03',
        año: '2024',
        src: '/fotos/imagen-03.jpg',
        alt: 'Proyecto de imagen corporativa 03',
        tamaño: 'mediano'
    },
];

export default function GaleriaImagen() {
    return (
        <div className="mosaico animar">
            {PROYECTOS.map(proyecto => (
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
}