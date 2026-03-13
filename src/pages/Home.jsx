import Gallery2 from "../components/ui/Gallery2";
import Reviews from "../components/ui/Reviews";
import Form from "../components/ui/Form";

export default function Home() {
    return (
        <div className="principal">
            <section className="seccion entrar">
                <span className="detalle-sigilo">SISTEMA VISUAL ACTIVO</span>
                <h1 className="brillo super-titulo mt-m">
                    ANGELA<br />STUDIO
                </h1>
                <p className="descripcion">
                    Diseño y desarrollo de alta costura digital. Creamos identidades que trascienden lo convencional a través de una estética sofisticada y una arquitectura técnica impecable.
                </p>
            </section>

            <Gallery2 />
            <Reviews />
            <Form />
        </div>
    );
}
