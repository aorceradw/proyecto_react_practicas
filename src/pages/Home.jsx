import Gallery from "../ui/Gallery";
import Reviews from "../ui/Reviews";
import Form from "../ui/Form";

export default function Home() {
    return (
        <div className="home-vanguard">
            <section className="hero-vanguard reveal">
                <p className="ticket-mono">// HOLA_ESTOY_AQUÍ</p>
                <h1>DISEÑO <span>CONSENTIDO</span><br /> CÓDIGO <span>ACTUAL</span></h1>
                
                <p className="hero-description">
                    Soy Angela. Desarrollo webs y asesoro marcas para que 
                    dejen de ser genéricas y empiecen a ser reales. 
                </p>
                
                <a href="#work" className="btn-vanguard">MIS TRABAJOS</a>
            </section>

            <section id="work" className="gallery-section reveal">
                <div style={{ marginBottom: '4rem' }}>
                    <p className="ticket-mono">// ARCHIVO_DE_PROYECTOS</p>
                    <h2 style={{ fontSize: '4rem' }}>LO QUE HE HECHO_</h2>
                </div>
                <Gallery />
            </section>

            <section id="reviews" className="reveal">
                <Reviews />
            </section>

            <section id="contact" className="reveal">
                <Form />
            </section>
        </div>
    );
}