import { Link } from 'react-router-dom';

const PROYECTOS = [
    {
        id: 1,
        titulo: 'Portfolio Personal',
        categoria: 'Desarrollo web',
        img: '/images/image.png',
    },
    {
        id: 2,
        titulo: 'V&W Identity',
        categoria: 'Imagen corporativa',
        img: '/images/DESIGNWAPO.jpg',
    },
    {
        id: 3,
        titulo: 'Mugler Editorial',
        categoria: 'Diseño gráfico',
        img: '/images/revista2.PNG',
    },
    {
        id: 4,
        titulo: 'Brand Ecosystem',
        categoria: 'Branding',
        img: '/images/MARCAS.jpg',
    },
];

export default function GaleriaHome() {
    return (
        <section className="galeria-home">

            <div className="galeria-home-cabecera">
                <span className="etiqueta">Trabajo reciente</span>
                <h2>Proyectos</h2>
            </div>

            <ul className="galeria-home-lista">
                {PROYECTOS.map(proyecto => (
                    <li key={proyecto.id} className="galeria-home-item">
                        <img
                            src={proyecto.img}
                            alt={proyecto.titulo}
                            className="galeria-home-foto"
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