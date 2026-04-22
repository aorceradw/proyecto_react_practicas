const PROYECTOS = [
    {
        id: 1,
        titulo: 'Portfolio Personal',
        stack: 'React · Vite · Node.js · MySQL',
        año: '2025',
        img: new URL('../../assets/images/image.png', import.meta.url).href,
        alt: 'Portfolio personal en desarrollo',
    },
    {
        id: 2,
        titulo: 'Exploración Visual Web',
        stack: 'React · UI/UX Design',
        año: '2025',
        img: new URL('../../assets/images/image (1).png', import.meta.url).href,
        alt: 'Proyecto de exploración visual',
    },
];

export default function GaleriaWeb() {
    return (
        <div className="galeria-web">

            {PROYECTOS.map(proyecto => (
                <article key={proyecto.id} className="proyecto-web">

                    <div className="proyecto-web-imagen">
                        <img src={proyecto.img} alt={proyecto.alt} />
                        <div className="proyecto-web-overlay">
                            <span>En desarrollo</span>
                        </div>
                    </div>

                    <div className="proyecto-web-info">
                        <div className="proyecto-web-cabecera">
                            <h3>{proyecto.titulo}</h3>
                            <span>{proyecto.año}</span>
                        </div>
                        <p>{proyecto.stack}</p>
                    </div>

                </article>
            ))}

            <p className="galeria-web-aviso">Más proyectos en camino.</p>

        </div>
    );
}