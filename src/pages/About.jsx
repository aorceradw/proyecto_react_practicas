export default function About() {
    return (
        <main>
            <section className="about-hero">
                <div className="about-foto-marco animar">
                    <img
                        src="/fotos/angela.jpg"
                        alt="Angela"
                        className="about-foto"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300x400/12111A/ECE8E1?text=Angela"; }}
                    />
                </div>

                <h1 className="about-titulo texto-cromo animar retraso-1">Angela</h1>

                <div className="about-cita-principal animar retraso-2">
                    <p className="cita-editorial">
                        "Soy diseñadora y desarrolladora web con base en Madrid.
                        Trabajo en la intersección entre la imagen corporativa y la tecnología —
                        construyendo marcas que tienen coherencia visual desde el primer píxel
                        hasta la última pantalla. Me interesa el diseño que comunica sin explicarse."
                    </p>
                </div>
            </section>

            <section className="skills-grid animar retraso-3">
                <div className="skill-columna">
                    <h4 className="etiqueta">01 / Diseño visual</h4>
                    <div className="skill-tags">
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Illustrator</span>
                        <span className="skill-tag">Photoshop</span>
                        <span className="skill-tag">InDesign</span>
                    </div>
                </div>

                <div className="skill-columna">
                    <h4 className="etiqueta">02 / Desarrollo web</h4>
                    <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Vite</span>
                    </div>
                </div>

                <div className="skill-columna">
                    <h4 className="etiqueta">03 / Imagen corporativa</h4>
                    <div className="skill-tags">
                        <span className="skill-tag">Asesoría corporativa</span>
                        <span className="skill-tag">Branding</span>
                        <span className="skill-tag">Identidad visual</span>
                    </div>
                </div>
            </section>

            <section className="seccion-reviews">
                <div className="review-item animar">
                    <p className="review-cita">
                        <span className="review-deco">✦</span>
                        El rediseño corporativo que implementó transformó la percepción internacional de nuestra startup en apenas un mes.
                    </p>
                    <p className="review-autor">Verónica Valles / Directora creativa</p>
                </div>

                <div className="review-item animar retraso-1">
                    <p className="review-cita">
                        <span className="review-deco">✦</span>
                        Su código no solo es estético; la velocidad de carga multiplicó nuestra retención de usuarios. Pura infraestructura sólida.
                    </p>
                    <p className="review-autor">Studio Vortex / Agencia tech</p>
                </div>
            </section>
        </main>
    );
}
