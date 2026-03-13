export default function VisorMovil({ pdfUrl, alCerrar }) {
    if (!pdfUrl) return null;

    return (
        <div className="visor-overlay" onClick={alCerrar}>
            <div className="telefono-contenedor" onClick={(e) => e.stopPropagation()}>
                {/* Botón de cerrar */}
                <button className="cerrar-visor" onClick={alCerrar}>✕</button>
                
                {/* Marco del teléfono */}
                <div className="marco-movil">
                    <div className="altavoz-sensor"></div>
                    <div className="pantalla-interna">
                        <iframe 
                            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                            title="Visor PDF Angela"
                            className="iframe-pdf"
                        ></iframe>
                    </div>
                    <div className="boton-home"></div>
                </div>

                <div className="info-visor">
                    <span className="detalle-sigilo">VISTA PREVIA MÓVIL</span>
                    <p className="texto-secundario">Desliza para explorar el documento</p>
                </div>
            </div>
        </div>
    );
}
