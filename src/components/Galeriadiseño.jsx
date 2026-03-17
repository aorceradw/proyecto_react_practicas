const PROYECTOS = [
    {
        id: 1,
        ref: 'FILE_001',
        titulo: 'Proyecto 01',
        año: '2025',
        src: '/fotos/diseño-01.jpg',
        alt: 'Proyecto de diseño gráfico 01',
        tamaño: 'grande'
    },
    {
        id: 2,
        ref: 'FILE_002',
        titulo: 'Proyecto 02',
        año: '2025',
        src: '/fotos/diseño-02.jpg',
        alt: 'Proyecto de diseño gráfico 02',
        tamaño: 'pequeño'
    },
    {
        id: 3,
        ref: 'FILE_003',
        titulo: 'Proyecto 03',
        año: '2024',
        src: '/fotos/diseño-03.jpg',
        alt: 'Proyecto de diseño gráfico 03',
        tamaño: 'pequeño'
    },
    {
        id: 4,
        ref: 'FILE_004',
        titulo: 'Proyecto 04',
        año: '2024',
        src: '/fotos/diseño-04.jpg',
        alt: 'Proyecto de diseño gráfico 04',
        tamaño: 'mediano'
    },
];

export default function GaleriaDiseño() {
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