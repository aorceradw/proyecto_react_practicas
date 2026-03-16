import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Opiniones from '../components/Opiniones';

function AnimacionTitulo({ texto }) {
  return (
    <div className="titulo-hero">
      {texto.split('').map((char, i) => (
        <span 
          key={i} 
          className="letra titulo-stroke" 
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline src="/videos/hero.mp4" />
        <div className="hero-overlay" />
        <div className="hero-contenido">
          <AnimacionTitulo texto="ANGELA" />
          <p className="hero-sub animar retraso-3">Frontend · Imagen · Granada</p>
          <Link to="/trabajos" className="hero-cta animar retraso-4">
            Proyectos
          </Link>
        </div>
        
        <div className="scroll-indicator animar retraso-4">
          <div className="linea-pulso" />
          <span className="scroll-txt">Scroll</span>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-pista">
          {[...Array(4)].map((_, i) => (
            <span key={i}>
              Branding · Desarrollo web · Imagen corporativa · Diseño gráfico · Granada ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section className="servicios-grid">
        <div className="tarjeta srv-1 animar">
          <span className="etiqueta-num">01</span>
          <h3 className="titulo-stroke">Branding</h3>
          <p>Identidades que trascienden el código. Construyo marcas con solvencia técnica y visual.</p>
        </div>

        <div className="tarjeta srv-2 animar">
          <span className="etiqueta-num">02</span>
          <h3 className="titulo-stroke">Desarrollo</h3>
          <p>Frontend con criterio. Interfaces que respiran la marca en cada clic.</p>
        </div>

        <div className="tarjeta srv-3 animar">
          <div className="srv-txt">
            <span className="etiqueta-num">03</span>
            <h3 className="titulo-stroke">Imagen Corp.</h3>
            <p>Estrategia visual completa. Unifico el discurso de marca en todos sus puntos digitales.</p>
          </div>
          <div className="srv-decor" style={{textAlign: 'right'}}>
            <span className="texto-cromo" style={{fontSize: '5rem'}}>✦</span>
          </div>
        </div>
      </section>

      <Form />
      <Opiniones />
    </div>
  );
}
