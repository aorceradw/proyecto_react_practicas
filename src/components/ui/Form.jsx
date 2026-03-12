export default function Form() {
    return (
        <div id="formulario" className="vanguard-block" style={{ border: 'none', padding: '2rem 0' }}>
            <form>
                <div className="input-box">
                    <label>¿Cómo te llamas?</label>
                    <input type="text" placeholder="TU NOMBRE AQUÍ" />
                </div>

                <div className="input-box">
                    <label>Tu correo electrónico</label>
                    <input type="email" placeholder="HOLA@CONTACTO.COM" />
                </div>

                <div className="input-box">
                    <label>Cuéntame tu idea</label>
                    <textarea rows="4" placeholder="¿EN QUÉ PUEDO AYUDARTE?"></textarea>
                </div>

                <button type="submit" className="btn-vanguard" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                    ENVIAR MENSAJE
                </button>
            </form>
        </div>
    );
}