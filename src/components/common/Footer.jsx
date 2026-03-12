export default function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <p className="ticket-mono" style={{ marginBottom: '2rem' }}>// REDES</p>
                <ul>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a href="https://behance.net" target="_blank" rel="noopener">Behance</a></li>
                </ul>
            </div>
            
            <div className="footer-credit">
                <p style={{ opacity: 0.4 }}>© 2026 Angela — Creado con lógica humana en Granada.</p>
            </div>
        </footer>
    );
}