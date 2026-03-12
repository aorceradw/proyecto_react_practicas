export default function About() {
    return (
        <div className="about-page reveal">
            <section className="about-hero">
                <p className="ticket-mono">// PERFIL_PERSONAL</p>
                <h1>Hola, soy <span>Angela</span>.</h1>
                <p className="hero-description">
                    Desarrolladora web, asesora de imagen y diseñadora. 
                    Me muevo entre el código y la estética porque creo que una cosa no funciona sin la otra.
                </p>
            </section>

            <section className="about-content vanguard-block">
                <div className="about-text">
                    <h2>Lo que hago_</h2>
                    <p>
                        Ayudo a marcas y perfiles profesionales a proyectar lo que realmente son. 
                        No se trata solo de tener una web bonita, sino de que cada píxel y cada línea de código cuenten una historia coherente. 
                        Mi enfoque es directo: soluciones que funcionan, diseños que impactan.
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        Vengo del mundo de la imagen corporativa, lo que me da una perspectiva diferente 
                        a la hora de picar código. Entiendo el peso de una tipografía y la importancia de un sistema escalable.
                    </p>
                </div>
                
                <div className="about-skills">
                    <p className="ticket-mono">// SKILLS</p>
                    <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                        <li>React & Vite</li>
                        <li>Branding & Identidad</li>
                        <li>Asesoría de Imagen</li>
                        <li>Diseño Gráfico</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
