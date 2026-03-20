const PROYECTOS = [
    {
        id: 1,
        ref: 'WEB_CURR',
        titulo: 'Portafolio Personal',
        tecnologias: 'React · Vite · Tailwind (In Progress)',
        año: '2025',
        src: '/images/image.png',
        alt: 'Captura del proceso de desarrollo del portafolio',
        url: '#'
    },
    {
        id: 2,
        ref: 'WEB_DEV',
        titulo: 'Exploración Visual Web',
        tecnologias: 'React · UI/UX Design',
        año: '2025',
        src: '/images/image (1).png',
        alt: 'Captura de pantalla de desarrollo web',
        url: '#'
    },
];

export default function GaleriaWeb() {
    return (
        <div className="galeria-web-container">
            <div className="grid-web animar">
                {PROYECTOS.map(proyecto => (
                    <article key={proyecto.id} className="grid-web-item">
                        <div className="grid-web-imagen-contenedor">
                            <img
                                src={proyecto.src}
                                alt={proyecto.alt}
                                className="grid-web-imagen"
                            />
                            <div className="grid-web-overlay">
                                <span className="grid-web-cta">En desarrollo ...</span>
                            </div>
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
            
            <div className="web-status-banner animar">
                <span className="etiqueta">EN PROGRESO DE MÁS</span>
                <p className="web-status-texto">Próximamente nuevos despliegues y casos de estudio.</p>
            </div>
        </div>
    );
}