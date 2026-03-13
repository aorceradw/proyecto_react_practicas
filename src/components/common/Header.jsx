import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="app-header animar">
            <Link to="/" className="marca">
                <img src="/logo.png" alt="Angela Logo" className="logo-imagen" />
                <span className="logo-texto texto-cromo">ANGELA</span>
            </Link>

            <nav className="nav-horizontal">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/trabajos" className="nav-link">Proyectos</Link>
                <Link to="/sobre-mi" className="nav-link">Sobre mí</Link>
                <a href="/#contacto" className="nav-link">Contacto</a>
            </nav>
        </header>
    );
}