import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src="/logo.png" alt="Angela Logo" className="logo" />
            </Link>
            <h1>Angela</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/trabajos">Trabajos</Link></li>
                    <li><Link to="/sobre-mi">Sobre mí</Link></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}