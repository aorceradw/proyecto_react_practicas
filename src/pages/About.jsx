import Opiniones from '../components/Opiniones';

export default function About() {
  return (
    <main className="about-page">
      <section className="about-img-col animar">
        <div className="about-imagen-wrap">
          <div className="sigil-decor" />
          <img src="/branding/lavivienne.jpg" alt="Angela" className="about-foto" />
        </div>
      </section>

      <section className="about-txt-col animar retraso-1">
        <h1 className="titulo-mixto" style={{fontSize: 'clamp(4rem, 10vw, 8rem)', marginBottom: '2rem'}}>
          <span className="stroke">AN</span>
          <span className="relleno">GELA</span>
        </h1>
        
        <span className="etiqueta" style={{marginBottom: '3rem', display: 'block'}}>Granada, España</span>

        <p style={{marginBottom: '2rem', lineHeight: '2'}}>
          Soy diseñadora, desarrolladora web y asesora de imagen en Granada. 
          Trabajo en la intersección entre identidad visual y código. 
          Entiendo que un producto digital solo funciona cuando su solvencia técnica 
          está alineada con lo que la marca necesita proyectar.
        </p>

        <p style={{marginBottom: '2rem', lineHeight: '2'}}>
          Mi trayectoria en la asesoría de imagen me permite ver el desarrollo 
          no solo como un conjunto de funciones, sino como un vehículo de comunicación. 
          Actualmente curso DAW para dominar el stack completo, buscando integrar 
          manuales de marca dentro de infraestructuras web robustas. 
        </p>
        
        <p style={{lineHeight: '2'}}>
          Freelance con criterio y enfoque estratégico. Busco proyectos donde pueda 
          aportar visión y solvencia técnica.
        </p>
      </section>

      <section className="skills-completo" style={{gridColumn: '1 / -1'}}>
        <div className="skills-grid">
          <div className="skill-col animar retraso-1">
            <h4 className="etiqueta">01 / Diseño</h4>
            <div className="skill-items">
              {['Figma', 'Illustrator', 'Photoshop', 'Lightroom', 'Canva Pro'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-col animar retraso-2">
            <h4 className="etiqueta">02 / Desarrollo</h4>
            <div className="skill-items">
              {['React', 'HTML/CSS', 'JavaScript', 'Vite', 'Node.js', 'Express', 'MySQL', 'Git'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-col animar retraso-3">
            <h4 className="etiqueta">03 / Consultoría</h4>
            <div className="skill-items">
              {['Imagen Corp.', 'Branding', 'Identidad Visual', 'Asesoría Personal'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{gridColumn: '1 / -1', marginTop: '10rem'}}>
        <Opiniones />
      </div>
    </main>
  );
}
