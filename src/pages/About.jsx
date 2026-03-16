export default function About() {
    return (
        <section className="sobre-mi">

            {/* Concepto SHINKA aplicado al about */}
            <div className="sobre-cabecera">
                <span className="etiqueta">Sobre mí</span>
                <h1 className="sobre-titulo">Ángela</h1>
                <span className="sobre-ubicacion">Granada, España</span>
            </div>

            {/* Layout principal */}
            <div className="sobre-cuerpo">

                {/* Columna visual */}
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

                {/* Columna de texto */}
                <div className="sobre-texto">

                    {/* Roles */}
                    <div className="sobre-roles">
                        <div className="sobre-rol sobre-rol--activo">
                            <span className="sobre-rol-numero">01</span>
                            <span className="sobre-rol-nombre">Desarrolladora web</span>
                        </div>
                        <div className="sobre-rol">
                            <span className="sobre-rol-numero">02</span>
                            <span className="sobre-rol-nombre">Asesora de imagen</span>
                        </div>
                        <div className="sobre-rol">
                            <span className="sobre-rol-numero">03</span>
                            <span className="sobre-rol-nombre">Diseñadora gráfica</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="sobre-bio">
                        <p className="sobre-bio-parrafo">
                            Soy Ángela. Desde Granada, construyo identidades
                            visuales y las estructuras digitales que las sostienen.
                        </p>
                        <p className="sobre-bio-parrafo">
                            Mi punto de partida es una convicción simple: la
                            tecnología y la estética hablan el mismo idioma.
                            Cuando las dos se alinean de verdad, el resultado
                            se nota.
                        </p>
                        <p className="sobre-bio-parrafo">
                            Me muevo entre el back y el front con la misma
                            naturalidad — porque entiendo que una marca no
                            puede permitirse que su web contradiga lo que
                            proyecta en el mundo. Esa mirada híbrida es mi
                            valor real.
                        </p>
                        <p className="sobre-bio-parrafo">
                            Creo en el proceso de mirar hacia dentro antes
                            de construir hacia fuera. Ayudo a las marcas a
                            entender su propia esencia — no para definirlas,
                            sino para que lo que construimos juntos tenga
                            coherencia desde el primer pixel.
                        </p>
                        <p className="sobre-bio-parrafo">
                            Cada línea de código tiene una intención.
                            Cada decisión visual tiene un porqué.
                            Así es como trabajo.
                        </p>
                        <p className="sobre-bio-cierre">
                            Ahora mismo compagino proyectos freelance con
                            formación técnica constante. Busco equipos donde
                            el rigor y la sensibilidad no sean cosas distintas.
                        </p>
                    </div>

                </div>
            </div>

            {/* Barra inferior de estado */}
            <div className="sobre-estado">
                <span className="etiqueta">DAW en curso</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">Freelance disponible</span>
                <span className="sobre-estado-separador" aria-hidden="true" />
                <span className="etiqueta">Abierta a equipo</span>
            </div>

        </section>
    );
}