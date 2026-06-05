import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as _Motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/A de angela2.png';
import ToggleTema from './ModoClaroOscuro';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="angela" />
                <span>angela</span>
            </Link>

            <div className="header-derecha">
                <ToggleTema />
                <button 
                    className={`menu-hamburguesa ${isMenuOpen ? 'abierto' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className={`nav-principal ${isMenuOpen ? 'visible' : ''}`}>
                <ul onClick={closeMenu}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/trabajos">Proyectos</Link></li>
                    <li><Link to="/sobre-mi">Sobre mí</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}