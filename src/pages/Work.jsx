import Gallery2 from '../components/Gallery2';
import VisorMovil from '../components/VisorMovil';

export default function Work() {
  return (
    <div className="work-page">
      <section className="work-intro">
        <h1 className="titulo-stroke animar" style={{fontSize: 'clamp(5rem, 12vw, 11rem)'}}>Proyectos</h1>
        <span className="etiqueta animar retraso-1">Archivo visual — 2026</span>
      </section>

      <Gallery2 />

      <section className="seccion-visores animar retraso-2">
        <div className="visores-grid">
          <VisorMovil 
            thumbnail="/branding/lavivienne.jpg" 
            pdfUrl="/branding/revista.pdf" 
            titulo="Revista Vanguard" 
          />
        </div>
      </section>
    </div>
  );
}