import Skills from '../components/Skills';

export default function About() {
    return (
        <section className="sobre-mi">

            <div className="sobre-cabecera animar">
                <span className="etiqueta">進化 · Shinka</span>
                <h1 className="sobre-titulo">Ángela</h1>
                <span className="sobre-ubicacion">GRX, SPAIN</span>
            </div>

            <div className="sobre-cuerpo">

                <div className="sobre-visual animar retraso-1">
                    <img
                        src="/images/a de angy.png"
                        alt="Ángela"
                        className="sobre-foto"
                    />
                </div>

                <div className="sobre-texto animar retraso-2">
                    <div className="sobre-bio">

                        <p className="sobre-bio-parrafo">
                            Shinka significa evolución. El salto que no tiene
                            vuelta atrás. No me adapto a los moldes,
                            los rediseño. Esa es mi filosofía, mi estética
                            y mi forma de escribir código.
                        </p>

                        <p className="sobre-bio-parrafo">
                            Soy desarrolladora fullstack en formación y asesora
                            de imagen corporativa. Dos mundos que para mí siempre
                            han sido el mismo: el código es moda, la moda es
                            arquitectura, y las dos son poder cuando sabes
                            exactamente lo que estás diciendo.
                        </p>

                        <p className="sobre-bio-parrafo">
                            Construyo interfaces con React y Node igual que
                            construyo identidades visuales con criterio,
                            con intención y con la certeza de que la coherencia
                            no es un detalle. Es la diferencia entre algo
                            que se olvida y algo que se recuerda.
                        </p>

                        <p className="sobre-bio-cierre">
                            DAW 25/26. Abierta a oportunidades que merezcan
                            la evolución. Si tu empresa busca a alguien que
                            piense en sistemas, diseñe con propósito y codee
                            con estética — ya me encontraste.
                        </p>

                    </div>
                </div>
            </div>

            <Skills />

            <div className="sobre-estado animar">
                <span className="etiqueta">進化 ★ En evolución</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">DAW 25/26</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">Abierta a oportunidades</span>
            </div>

        </section>
    );
}