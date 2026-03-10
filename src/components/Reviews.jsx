export default function Reviews() {
    return (
        <div id="reviews-container">
            <div className="section-header">
                <h2>Testimonios</h2>
                <p>Lo que dicen mis clientes sobre la transformación de su marca</p>
            </div>
            <div className="reviews-grid">
                <article className="review">
                    <p>"Su enfoque dual entre tecnología y estética elevó nuestra presencia digital a un nivel de sofisticación que no creíamos posible."</p>
                    <span>— CEO, Tech & Design Studio</span>
                </article>
                <article className="review">
                    <p>"No solo desarrolló nuestra web, sino que redefinió cómo nos proyectamos ante el mundo corporativo."</p>
                    <span>— Directora de Marketing, Elite Consulting</span>
                </article>
                <article className="review">
                    <p>"Un equilibrio perfecto entre funcionalidad técnica y elegancia visual. Altamente recomendada para marcas premium."</p>
                    <span>— Fundadora, Luxury Goods Co.</span>
                </article>
            </div>
        </div>
    );
}