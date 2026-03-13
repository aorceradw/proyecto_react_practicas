export default function Footer() {
    return (
        <footer className="app-footer animar retraso-2">
            <div className="footer-logo-fondo texto-cromo">ANGELA</div>

            <div className="footer-copyright">
                <p>© 2026 Angela Studio</p>
                <p className="footer-copyright-linea">Todos los derechos reservados</p>
            </div>

            <div className="footer-redes-contenedor">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
                    LinkedIn <span className="footer-link-flecha">↗</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">
                    Instagram <span className="footer-link-flecha">↗</span>
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="footer-link">
                    Behance <span className="footer-link-flecha">↗</span>
                </a>
            </div>
        </footer>
    );
}