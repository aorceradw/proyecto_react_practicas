export default function Footer() {
    const año = new Date().getFullYear();

    return (
        <footer className="footer">

            <p>© {año} Angela · Granada</p>

            <ul className="footer-redes">
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                        Behance
                    </a>
                </li>
            </ul>

            <span className="footer-marca" aria-hidden="true">ANGELA</span>

        </footer>
    );
}