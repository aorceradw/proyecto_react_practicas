import { useState } from "react";
import VisorMovil from "./VisorMovil";

const proyectos = [
    { id: 101, titulo: "Vortex Web", categoria: "web", src: "/web/image.png", tipo: "imagen" },
    { id: 102, titulo: "Evolve UI", categoria: "web", src: "/web/image (1).png", tipo: "imagen" },
    { id: 103, titulo: "Minimal Lux", categoria: "web", src: "/web/image (2).png", tipo: "imagen" },
    { id: 201, titulo: "La Vivienne", categoria: "branding", src: "/branding/lavivienne.jpg", tipo: "imagen" },
    { id: 202, titulo: "Revista Vanguard", categoria: "branding", src: "/branding/revista.pdf", tipo: "pdf" },
    { id: 301, titulo: "Poster Art", categoria: "diseño", src: "/diseño/poster.png", tipo: "imagen" },
    { id: 305, titulo: "Visual System", categoria: "diseño", src: "/diseño/vw2.jpg", tipo: "imagen" },
];

export default function Gallery2() {
    const [activa, setActiva] = useState("todos");
    const [pdfSeleccionado, setPdfSeleccionado] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [indiceGaleria, setIndiceGaleria] = useState(0);

    const carruselProyectos = proyectos.filter(p => p.categoria === "diseño" || p.categoria === "branding");
    const itemsCarrusel = activa === "todos" ? carruselProyectos : proyectos.filter(p => p.categoria === activa && (activa === "diseño" || activa === "branding"));
    const itemsWeb = activa === "todos" ? proyectos.filter(p => p.categoria === "web") : proyectos.filter(p => p.categoria === "web" && (activa === "todos" || activa === "web"));

    const manejarNavegacion = (direccion) => {
        const total = itemsCarrusel.length;
        if (total === 0) return;
        setIndiceGaleria((prev) => (prev + direccion + total) % total);
    };

    return (
        <section>
            <nav className="menu-filtros animar">
                {["todos", "diseño", "branding", "web"].map(cat => (
                    <button
                        key={cat}
                        onClick={() => { setActiva(cat); setIndiceGaleria(0); }}
                        className={`filtro-tab etiqueta ${activa === cat ? "activo" : ""}`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {(activa === "todos" || activa === "diseño" || activa === "branding") && itemsCarrusel.length > 0 && (
                <div className="carrusel-galeria">
                    <button className="carrusel-flecha animar retraso-1" onClick={() => manejarNavegacion(-1)}>&larr;</button>

                    <div className="carrusel-pista">
                        <div className="carrusel-contenido" style={{ transform: `translateX(-${indiceGaleria * 640}px)` }}>
                            {itemsCarrusel.map(proyecto => (
                                <div
                                    key={proyecto.id}
                                    className="tarjeta tarjeta-carrusel"
                                    onClick={() => {
                                        if (proyecto.tipo === "pdf") setPdfSeleccionado(proyecto.src);
                                        else setImagenSeleccionada(proyecto.src);
                                    }}
                                >
                                    {proyecto.tipo === "pdf" ? (
                                        <div className="tarjeta-pdf-contenido">
                                            <span className="etiqueta tarjeta-pdf-etiqueta">Documento PDF</span>
                                            <h3 className="tarjeta-pdf-titulo">{proyecto.titulo}</h3>
                                            <p className="tarjeta-pdf-accion">Click para abrir visor</p>
                                        </div>
                                    ) : (
                                        <img src={proyecto.src} alt={proyecto.titulo} className="tarjeta-carrusel-img" />
                                    )}
                                    <div className="tarjeta-carrusel-info">
                                        <span className="etiqueta">{proyecto.categoria}</span>
                                        <h3 className="tarjeta-carrusel-nombre">{proyecto.titulo}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carrusel-flecha animar retraso-1" onClick={() => manejarNavegacion(1)}>&rarr;</button>
                </div>
            )}

            {(activa === "todos" || activa === "web") && itemsWeb.length > 0 && (
                <div className="grid-web animar retraso-3">
                    {itemsWeb.map(proyecto => (
                        <div key={proyecto.id} className="grid-item tarjeta">
                            <img src={proyecto.src} alt={proyecto.titulo} className="grid-img" />
                            <div className="grid-overlay">
                                <span className="etiqueta">Ver proyecto</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {imagenSeleccionada && (
                <div className="lightbox-grain" onClick={() => setImagenSeleccionada(null)}>
                    <img src={imagenSeleccionada} alt="Vista ampliada" className="lightbox-img" />
                </div>
            )}

            <VisorMovil
                pdfUrl={pdfSeleccionado}
                alCerrar={() => setPdfSeleccionado(null)}
            />
        </section>
    );
}