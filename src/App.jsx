import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import Form from "./components/Form.jsx";

export default function App() {
    return (
        <main>
            <Header />
            <section id="portfolio">
                <Gallery />
            </section>
            <section id="reviews" className="dark-section">
                <Reviews />
            </section>
            <section id="contact">
                <Form />
            </section>
            <Footer />
        </main>
    );
}

