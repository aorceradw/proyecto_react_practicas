export default function VisorMovil({ thumbnail, pdfUrl, titulo }) {
  return (
    <div className="visor-movil animar">
      <div className="visor-marco">
        <div className="visor-muesca" />
        <div className="visor-botones-laterales">
          <span />
          <span />
          <span />
        </div>
        <div className="visor-pantalla">
          <img src={thumbnail} alt={titulo} className="visor-thumbnail" />
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="visor-overlay-cta"
          >
            <span className="visor-boton">Ver PDF</span>
          </a>
        </div>
      </div>
      <p className="visor-titulo">{titulo}</p>
    </div>
  );
}
