export default function Footer() {
    const año = new Date().getFullYear();

    return (
        <footer className="footer">

            <p>© {año} angela · Granada</p>

            <ul className="footer-redes">
                <li>
                    <a href="https://www.linkedin.com/in/angelaorceraruiz/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/h3ncoo?igsh=MXQ1Z25oNXQyaDl4bA==" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="https://github.com/aorceradw" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
            </ul>

            <span className="footer-marca" aria-hidden="true">angela</span>

        </footer>
    );
}