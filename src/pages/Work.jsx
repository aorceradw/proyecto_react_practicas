import Gallery from "../ui/Gallery";

export default function Work() {
    return (
        <section className="main-container reveal">
            <header className="work-header">
                <p className="ticket-mono">// TRABAJOS_RECIENTES</p>
                <h1 className="hero-title">
                    MI ARCHIVO <span>DETRABAJO</span>
                </h1>
                <p className="hero-description" style={{ marginTop: '2rem' }}>
                    Una selección de proyectos donde el diseño y la tecnología se dan la mano. 
                    Sin complicaciones, solo resultados.
                </p>
            </header>

            <div className="container">
                <Gallery />
            </div>

            <section className="work-footer" style={{ marginTop: '10vh' }}>
                <p className="ticket-mono">¿HABLAMOS?</p>
                <h2 style={{ fontSize: '6vw', fontFamily: 'Syne', textTransform: 'uppercase' }}>TU PROYECTO <span>AQUÍ</span></h2>
                <a href="/#contact" className="btn-vanguard">CONTACTAR_</a>
            </section>
        </section>
    );
}
