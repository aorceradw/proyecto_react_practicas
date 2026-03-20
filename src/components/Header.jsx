import { Link } from "react-router-dom";
import ToggleTema from "./ModoClaroOscuro";

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="marca">
                <img src="/images/A de angela2.png" alt="Angela" className="marca-logo" />
                <span className="marca-nombre">ANGELA</span>
            </Link>

            <nav className="nav">
                <ul className="nav-lista">
                    <li><Link to="/"         className="nav-link">Inicio</Link></li>
                    <li><Link to="/trabajos" className="nav-link">Proyectos</Link></li>
                    <li><Link to="/sobre-mi" className="nav-link">Sobre mí</Link></li>
                    <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
                </ul>
            </nav>

            <ToggleTema />
        </header>
    );
}