import { Link } from 'react-router-dom';
import logo from '../assets/images/A de angela2.png';
import ToggleTema from './ModoClaroOscuro';

export default function Header() {
    return (
        <header className="header">

            <Link to="/" className="logo">
                <img src={logo} alt="Angela" />
                <span>ANGELA</span>
            </Link>

            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/trabajos">Proyectos</Link></li>
                    <li><Link to="/sobre-mi">Sobre mí</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>

            <ToggleTema />

        </header>
    );
}