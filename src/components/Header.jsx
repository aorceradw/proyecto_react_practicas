import { Link } from 'react-router-dom';
import ModoColor from './ModoColor';

export default function Header() {
  return (
    <header className="header-app">
      <Link to="/" className="marca">
        <img src="/logo.png" alt="Logo" className="logo-header" />
        <h1 className="nombre-marca titulo-stroke">Angela</h1>
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/trabajos">Proyectos</Link></li>
          <li><Link to="/sobre-mi">Sobre mí</Link></li>
        </ul>
        <ModoColor />
      </nav>
    </header>
  );
}

