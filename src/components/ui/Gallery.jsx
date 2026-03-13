export default function Gallery() {
    const foto1 = "https://media.licdn.com/dms/image/v2/D4D22AQFqB-3d07Hd9g/feedshare-shrink_1280/B4DZasKxiBHQAk-/0/1746645234448?e=1775088000&v=beta&t=gdhdyaPa9EgG6KGvZEC8UKTOelcNBFrgi3bp_3FHEjw";
    const foto2 = "https://media.licdn.com/dms/image/v2/D4D22AQHOMlXcvEzygQ/feedshare-shrink_1280/B4DZasKxgWG0Ao-/0/1746645231311?e=1775088000&v=beta&t=DOJVZtuWLbMIKatjw6FTBl5T3QIVewFsryChR2kh89g";
    const foto3 = "https://media.licdn.com/dms/image/v2/D4D22AQFSHbXJvRECBg/feedshare-shrink_1280/B4DZasKxifG8Ak-/0/1746645235585?e=1775088000&v=beta&t=hhNm_kCS0AFG4o0IzU4UqlO-celPfgmdIV7rDPKM2UA";

    return (
        <section className="seccion entrar">
            <div className="mb-l">
                <span className="detalle-sigilo">ARCHIVO DE TRABAJO</span>
                <h2 className="brillo mt-m">OBRAS_</h2>
            </div>
            
            <ul className="galeria">
                <li className="galeria-item ancho"><img className="galeria-imagen" src={foto1} alt="Proyecto 01" /></li>
                <li className="galeria-item medio"><img className="galeria-imagen" src={foto2} alt="Proyecto 02" /></li>
                <li className="galeria-item total"><img className="galeria-imagen" src={foto3} alt="Proyecto 03" /></li>
            </ul>
        </section>
    );
}