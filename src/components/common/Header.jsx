import { Link } from "react-router-dom";
import ModoColor from "../ui/ModoColor";

export default function Header() {
    return (
        <header className="cabecera entrar">
            <div className="fila-cabecera">
                <Link to="/" className="identidad">
                    <img src="/logo.png" alt="Angela Logo" className="logo" />
                    <h1 className="brillo">Angela</h1>
                </Link>
                <ModoColor />
            </div>
            
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