const PROYECTOS = [
    {
        id: 1,
        ref: 'WEB_001',
        titulo: 'Proyecto web 01',
        tecnologias: 'React · Node · MySQL',
        año: '2025',
        src: '/fotos/web-01.jpg',
        alt: 'Proyecto de desarrollo web 01',
        url: 'https://proyecto01.com'
    },
    {
        id: 2,
        ref: 'WEB_002',
        titulo: 'Proyecto web 02',
        tecnologias: 'React · Vite · CSS',
        año: '2025',
        src: '/fotos/web-02.jpg',
        alt: 'Proyecto de desarrollo web 02',
        url: 'https://proyecto02.com'
    },
    {
        id: 3,
        ref: 'WEB_003',
        titulo: 'Proyecto web 03',
        tecnologias: 'HTML · CSS · JavaScript',
        año: '2024',
        src: '/fotos/web-03.jpg',
        alt: 'Proyecto de desarrollo web 03',
        url: 'https://proyecto03.com'
    },
];

export default function GaleriaWeb() {
    return (
        <div className="grid-web animar">
            {PROYECTOS.map(proyecto => (
                <article key={proyecto.id} className="grid-web-item">

                    <div className="grid-web-imagen-contenedor">
                        <img
                            src={proyecto.src}
                            alt={proyecto.alt}
                            className="grid-web-imagen"
                        />
                        {/* Overlay con CTA */}
                        <a
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid-web-overlay"
                        >
                            <span className="grid-web-cta">Ver proyecto ↗</span>
                        </a>
                    </div>

                    <div className="grid-web-meta">
                        <span className="mosaico-ref">{proyecto.ref}</span>
                        <span className="grid-web-titulo">{proyecto.titulo}</span>
                        <span className="grid-web-tecnologias">{proyecto.tecnologias}</span>
                        <span className="mosaico-año">{proyecto.año}</span>
                    </div>

                </article>
            ))}
        </div>
    );
}