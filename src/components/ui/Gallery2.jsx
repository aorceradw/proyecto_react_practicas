import { useState } from "react";

const proyectos = [
    // WEB
    { id: 101, categoria: "web", src: "/web/image.png", alt: "Desarrollo Web 01", tamaño: "total", tipo: "imagen" },
    { id: 102, categoria: "web", src: "/web/image (1).png", alt: "Desarrollo Web 02", tamaño: "ancho", tipo: "imagen" },
    { id: 103, categoria: "web", src: "/web/image (2).png", alt: "Desarrollo Web 03", tamaño: "medio", tipo: "imagen" },
    
    // BRANDING
    { id: 201, categoria: "branding", src: "/branding/lavivienne.jpg", alt: "Branding La Vivienne", tamaño: "medio", tipo: "imagen" },
    { id: 202, categoria: "branding", src: "/branding/nokia.jpg", alt: "Branding Nokia Concept", tamaño: "ancho", tipo: "imagen" },
    { id: 203, categoria: "branding", src: "/branding/puf1.PNG", alt: "Branding Puf 1", tamaño: "medio", tipo: "imagen" },
    { id: 204, categoria: "branding", src: "/branding/puf2.PNG", alt: "Branding Puf 2", tamaño: "medio", tipo: "imagen" },
    { id: 205, categoria: "branding", src: "/branding/revista.pdf", alt: "Revista Branding PDF", tamaño: "total", tipo: "pdf" },

    // DISEÑO (IMAGEN)
    { id: 301, categoria: "imagen", src: "/diseño/poster.png", alt: "Diseño Poster", tamaño: "total", tipo: "imagen" },
    { id: 302, categoria: "imagen", src: "/diseño/recurso.png", alt: "Recurso Gráfico", tamaño: "medio", tipo: "imagen" },
    { id: 303, categoria: "imagen", src: "/diseño/starstar.png", alt: "Diseño Star", tamaño: "ancho", tipo: "imagen" },
    { id: 304, categoria: "imagen", src: "/diseño/vw1.jpg", alt: "Visual 1", tamaño: "medio", tipo: "imagen" },
    { id: 305, categoria: "imagen", src: "/diseño/vw2.jpg", alt: "Visual 2", tamaño: "total", tipo: "imagen" },
    { id: 306, categoria: "imagen", src: "/diseño/vw3.jpg", alt: "Visual 3", tamaño: "ancho", tipo: "imagen" },
    { id: 307, categoria: "imagen", src: "/diseño/vw4.jpg", alt: "Visual 4", tamaño: "medio", tipo: "imagen" },
];

const categorias = [
    { clave: "todos", etiqueta: "Todos" },
    { clave: "web", etiqueta: "Desarrollo web" },
    { clave: "branding", etiqueta: "Branding" },
    { clave: "imagen", etiqueta: "Imagen corporativa" },
];

export default function Gallery2() {
    const [activa, setActiva] = useState("todos");

    const filtrados = activa === "todos"
        ? proyectos
        : proyectos.filter(p => p.categoria === activa);

    return (
        <section className="seccion entrar">
            <div className="mb-l">
                <span className="detalle-sigilo">ARCHIVO DE TRABAJO</span>
                <h2 className="brillo">OBRAS_</h2>
            </div>

            <nav className="mb-l" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {categorias.map(cat => (
                    <button
                        key={cat.clave}
                        onClick={() => setActiva(cat.clave)}
                        className={`boton ${activa === cat.clave ? "" : "brillo"}`}
                        style={{ 
                            padding: '0.8rem 1.5rem', 
                            fontSize: '0.8rem',
                            background: activa === cat.clave ? 'var(--crema)' : 'transparent',
                            color: activa === cat.clave ? 'var(--negro)' : 'var(--crema)',
                            border: '1px solid var(--borde)'
                        }}
                    >
                        {cat.etiqueta}
                    </button>
                ))}
            </nav>

            <ul className="galeria">
                {filtrados.map(proyecto => (
                    <li
                        key={proyecto.id}
                        className={`galeria-item ${proyecto.tamaño}`}
                    >
                        {proyecto.tipo === "pdf" ? (
                            <div className="pdf-contenedor" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(232, 196, 188, 0.05)', gap: '1rem' }}>
                                <span className="detalle-sigilo">DOCUMENTO PDF</span>
                                <h3 style={{ fontSize: '1.5rem' }}>REVISTA_BRANDING</h3>
                                <a href={proyecto.src} target="_blank" rel="noreferrer" className="boton" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}>
                                    ABRIR ARCHIVO
                                </a>
                            </div>
                        ) : (
                            <img className="galeria-imagen" src={proyecto.src} alt={proyecto.alt} />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}