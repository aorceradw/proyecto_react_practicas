import Skills from '../components/Skills';

export default function About() {
    return (
        <section className="sobre-mi">
            <div className="sobre-cabecera">
                <span className="etiqueta">Snapshot</span>
                <h1 className="sobre-titulo">Ángela</h1>
                <span className="sobre-ubicacion">Granada — Worldwide</span>
            </div>

            <div className="sobre-cuerpo">
                <div className="sobre-visual">
                    <div className="sobre-sigil">
                        <div className="sobre-sigil-circulo sobre-sigil-circulo--grande" />
                        <div className="sobre-sigil-circulo sobre-sigil-circulo--medio" />
                        <div className="sobre-sigil-circulo sobre-sigil-circulo--pequeño" />
                        <div className="sobre-sigil-linea sobre-sigil-linea--horizontal" />
                        <div className="sobre-sigil-linea sobre-sigil-linea--vertical" />
                        <div className="sobre-sigil-linea sobre-sigil-linea--diagonal" />
                    </div>
                    <span className="sobre-inicial">A_</span>
                </div>

                <div className="sobre-texto">
                    <div className="sobre-bio">
                        <p className="sobre-bio-parrafo">
                            No entiendo el diseño sin la técnica, ni el código sin la estética. 
                            Desde Granada, me dedico a elevar marcas a través de interfaces que no solo 
                            funcionan, sino que se sienten.
                        </p>
                        
                        <p className="sobre-bio-parrafo">
                            Vengo del mundo visual, pero me quedé por la arquitectura del software. 
                            Esa dualidad me permite moverme entre el píxel y el servidor con una 
                            única obsesión: la coherencia absoluta.
                        </p>

                        <p className="sobre-bio-parrafo">
                            Creo en marcas con fondo, no solo con fachada. Mi trabajo consiste en 
                            traducir esa esencia interna en estructuras digitales sólidas, elegantes 
                            y, sobre todo, contemporáneas.
                        </p>

                        <p className="sobre-bio-parrafo">
                            Sin ruido innecesario. Solo intención, rigor y un poco de intuición.
                        </p>

                        <p className="sobre-bio-cierre">
                            Actualmente navegando entre proyectos freelance y el tramo de DAW. 
                            Busco espacios donde la creatividad sea una decisión técnica y el código, 
                            una pieza de diseño más.
                        </p>
                    </div>
                </div>
            </div>

            <Skills />
        
            <div className="sobre-estado">
                <span className="etiqueta">DAW 25/26</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">Open to work</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">Creative Dev</span>
            </div>
        </section>
    );
}