import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="cabecera entrar">
            <Link to="/" className="identidad">
                <img src="/logo.png" alt="Angela Logo" className="logo" />
                <h1 className="brillo">Angela</h1>
            </Link>
            
            <nav className="navegacion">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/trabajos">PROYECTOS</Link></li>
                    <li><Link to="/sobre-mi">BIO</Link></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
    );
}