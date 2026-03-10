export default function Gallery() {
    const tituloPortfolio = "Branding & Digital Strategy";
    const parrafo = "Casos de éxito en imagen corporativa y desarrollo web";
    const foto1 = <img src={"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"} alt="Modern Office Spaces" />;
    const foto2 = <img src={"https://images.unsplash.com/photo-1600880210119-7512d1b714f3?auto=format&fit=crop&q=80&w=800"} alt="Luxury Branding Design" />;
    const foto3 = <img src={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"} alt="Corporate Architecture" />;

    return (
        <div className="gallery-container">
            <div className="gallery-text">
                <h2>{tituloPortfolio}</h2>
                <p>{parrafo}</p>
            </div>
            <ul className="gallery-list">
                <li>{foto1}</li>
                <li>{foto2}</li>
                <li>{foto3}</li>
            </ul>
        </div>
    );
}
