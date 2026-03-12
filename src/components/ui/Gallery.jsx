export default function Gallery() {
    const foto1 = "https://media.licdn.com/dms/image/v2/D4D22AQFqB-3d07Hd9g/feedshare-shrink_1280/B4DZasKxiBHQAk-/0/1746645234448?e=1775088000&v=beta&t=gdhdyaPa9EgG6KGvZEC8UKTOelcNBFrgi3bp_3FHEjw";
    const foto2 = "https://media.licdn.com/dms/image/v2/D4D22AQHOMlXcvEzygQ/feedshare-shrink_1280/B4DZasKxgWG0Ao-/0/1746645231311?e=1775088000&v=beta&t=DOJVZtuWLbMIKatjw6FTBl5T3QIVewFsryChR2kh89g";
    const foto3 = "https://media.licdn.com/dms/image/v2/D4D22AQFSHbXJvRECBg/feedshare-shrink_1280/B4DZasKxifG8Ak-/0/1746645235585?e=1775088000&v=beta&t=hhNm_kCS0AFG4o0IzU4UqlO-celPfgmdIV7rDPKM2UA";

    return (
        <ul className="gallery-grid">
            <li className="gallery-item">
                <div className="gallery-img-box">
                    <img src={foto1} alt="img1rosita" />
                </div>
            </li>
            
            <li className="gallery-item">
                <div className="gallery-img-box">
                    <img src={foto2} alt="img2rosita" />
                </div>
            </li>

            <li className="gallery-item">
                <div className="gallery-img-box">
                    <img src={foto3} alt="img3vanguardia" />
                </div>
                <div className="gallery-content">
                    <h3>Exploración visual</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                        Buscando siempre el equilibrio entre lo que se ve y lo que se siente.
                    </p>
                </div>
            </li>
        </ul>
    );
}