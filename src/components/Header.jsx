export default function Header() {
    return (
        <div className="header-container" id="home">
            <header>
                <div className="branding">
                    <span className="subtitle">Desarrolladora Web & Asesora de Imagen</span>
                    <h1>Digital Presence <span>&</span> Corporate Identity</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Proyectos</a></li>
                        <li><a href="#reviews">Testimonios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}