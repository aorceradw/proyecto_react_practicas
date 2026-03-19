import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="marca">
                <img src="public\images\A de angela2.png" alt="Angela" className="marca-logo" />
                <span className="marca-nombre">ANGELA</span>
            </Link>

            <nav className="nav">
                <ul className="nav-lista">
                    <li><Link to="/" className="nav-link">Inicio</Link></li>
                    <li><Link to="/trabajos" className="nav-link">Proyectos</Link></li>
                    <li><Link to="/sobre-mi" className="nav-link">Sobre mí</Link></li>
                    <li><a href="#contacto" className="nav-link">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}