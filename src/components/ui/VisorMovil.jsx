export default function VisorMovil({ pdfUrl, alCerrar }) {
    if (!pdfUrl) return null;

    return (
        <div className="lightbox-grain" onClick={alCerrar}>
            <div className="marco-y2k animar" onClick={(e) => e.stopPropagation()}>
                <div className="marco-muesca"></div>
                <div className="marco-boton-lateral"></div>
                <div className="marco-boton-lateral"></div>
                <div className="marco-boton-izq"></div>

                <div className="pantalla-y2k">
                    <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        title="Visor PDF"
                        className="visor-iframe"
                    ></iframe>
                </div>

                <a href={pdfUrl} target="_blank" rel="noreferrer" className="visor-boton-pdf etiqueta">
                    Ver PDF completo
                </a>

                <button onClick={alCerrar} className="visor-cerrar">
                    ✕ Cerrar
                </button>
            </div>
        </div>
    );
}
