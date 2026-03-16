export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copyright">© 2026 Angela — Granada</p>

            <ul className="footer-links">
                <li>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Behance
                    </a>
                </li>
            </ul>

            <span className="footer-deco" aria-hidden="true">ANGELA</span>
        </footer>
    );
}