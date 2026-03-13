import Gallery from "../components/ui/Gallery";

export default function Work() {
    return (
        <div className="pagina-trabajo">
            <header className="animacion-entrada">
                <div className="identidad-cabecera">
                    <h1 className="titulo-metalico">Proyectos</h1>
                </div>
                <p>
                    Trabajo de branding, desarrollo web e identidad corporativa.
                    Cada proyecto con un problema distinto y una solución
                    construida desde cero.
                </p>
                <nav>
                    <ul>
                        <li><a href="/">Volver al inicio</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <Gallery />

            <div id="contact" className="seccion-galeria">
                <div className="bloque-destacado" style={{ maxWidth: '700px' }}>
                    <span className="subtitulo-superior" style={{ marginBottom: '1.2rem' }}>Siguiente paso</span>
                    <h2 className="titulo-metalico" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
                        Trabajemos juntas
                    </h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Si tienes un proyecto en mente o quieres renovar
                        tu imagen digital, escríbeme.
                    </p>
                    <a href="/#contact" className="boton-accion" style={{
                        display: 'inline-block',
                        background: 'var(--rosa)',
                        color: '#000',
                        padding: '1rem 3rem',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '1.2rem',
                        letterSpacing: '0.15em',
                        textDecoration: 'none'
                    }}>
                        Contactar
                    </a>
                </div>
            </div>
        </div>
    );
}