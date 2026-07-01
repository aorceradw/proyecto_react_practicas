import { motion as Motion } from 'framer-motion';
import angyImg from '../assets/images/a de angy.png';
import Skills from '../components/Skills';

const variantes = {
    inicial: { opacity: 0, y: 18 },
    entrar:  { opacity: 1, y: 0,   transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    salir:   { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

export default function SobreMi() {
    return (
        <Motion.main className="sobre-mi" variants={variantes} initial="inicial" animate="entrar" exit="salir">

            <div className="sobre-cabecera">
                <span className="etiqueta">進化 · Shinka</span>
                <h1>ángela</h1>
                <span className="sobre-ubicacion">GRX, SPAIN</span>
            </div>

            <div className="sobre-cuerpo">

                <div className="sobre-foto">
                    <img src={angyImg} alt="Ángela" />
                </div>

                <div className="sobre-texto">
                    <p>
                        Shinka significa evolución. El salto que no tiene
                        vuelta atrás. No me adapto a los moldes,
                        los rediseño. Esa es mi filosofía, mi estética
                        y mi forma de escribir código.
                    </p>
                    <p>
                        Soy desarrolladora fullstack en formación y asesora
                        de imagen corporativa. Dos mundos que para mí siempre
                        han sido el mismo: el código es moda, la moda es
                        arquitectura, y las dos son poder cuando sabes
                        exactamente lo que estás diciendo.
                    </p>
                    <p>
                        Construyo interfaces con React y Node igual que
                        construyo identidades visuales — con criterio,
                        con intención y con la certeza de que la coherencia
                        no es un detalle. Es la diferencia entre algo
                        que se olvida y algo que se recuerda.
                    </p>
                    <p className="sobre-cierre">
                        DAW 25/26. Abierta a oportunidades que merezcan
                        la evolución. Si tu empresa busca a alguien que
                        piense en sistemas, diseñe con propósito y codee
                        con estética — ya me encontraste.
                    </p>
                </div>

            </div>

            <Skills />

            <div className="sobre-estado">
                <span className="etiqueta">進化 ★ En evolución</span>
                <span className="etiqueta">DAW 25/26</span>
                <span className="etiqueta">Abierta a oportunidades</span>
            </div>

        </Motion.main>
    );
}