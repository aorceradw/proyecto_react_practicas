import { Link } from 'react-router-dom';
import portfolioImg from '../assets/images/portfolio.png';

const PROYECTOS = [
    {
        id: 1,
        titulo: 'V4NGVARD1ST4',
        categoria: 'Diseño gráfico con Adobe Photoshop e Illustrator',
        img: new URL('../assets/images/model2.webp', import.meta.url).href,
    },
    {
        id: 2,
        titulo: 'CRE4TING AND C0DING IDENTITIES',
        categoria: 'Imagen corporativa con modelado 3d en Photoshop e Illustrator',
        img: new URL('../assets/images/vw4.webp', import.meta.url).href,
    },
    {
        id: 3,
        titulo: 'CREATE Y0UR P0WER',
        categoria: 'Branding',
        img: new URL('../assets/images/MARCAS.webp', import.meta.url).href,
        
    },
    {
        id: 4,
        titulo: 'CODE X ART',
        categoria: 'Desarrollo web en progreso',
        img: new URL('../assets/images/image.png', import.meta.url).href,
    },
];

export default function GaleriaHome() {
    return (
        <section className="galeria-home">

            <div className="galeria-home-cabecera">
                <span className="etiqueta">Trabajo reciente</span>
                <h2>Proyectos</h2>
            </div>

            <img src={portfolioImg} className="foto_portfolio" alt="Portfolio" />

            <ul className="galeria-home-lista">
                {PROYECTOS.map(proyecto => (
                    <li key={proyecto.id} className="galeria-home-item">
                        <img
                            src={proyecto.img}
                            alt={proyecto.titulo}
                            className="galeria-home-foto"
                            loading="lazy"
                        />
                        <div className="galeria-home-info">
                            <span className="galeria-home-categoria">{proyecto.categoria}</span>
                            <h3 className="galeria-home-titulo-item">{proyecto.titulo}</h3>
                        </div>
                    </li>
                ))}
            </ul>

            <Link to="/trabajos" className="galeria-home-cta">
                Ver todos los proyectos →
            </Link>

        </section>
    );
}