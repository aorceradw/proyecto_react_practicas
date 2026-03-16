export default function Footer() {
  const anio = new Date().getFullYear();
  
  return (
    <footer className="footer-app">
      <div className="footer-fondo-texto">ANGELA</div>
      
      <div className="footer-info">
        <p>© {anio} ANGELA — Granada</p>
      </div>

      <nav className="footer-social">
        <a href="https://linkedin.com" className="social-link" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://instagram.com" className="social-link" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://behance.net" className="social-link" target="_blank" rel="noreferrer">Behance ↗</a>
      </nav>
    </footer>
  );
}
