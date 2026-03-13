export default function Form() {
    return (
        <section id="contacto" className="seccion entrar">
            <div className="caja">
                <span className="detalle-sigilo">COLABORACIONES PROFESIONALES</span>
                <h2 className="brillo mt-m mb-l">HABLEMOS_DE_NEGOCIOS</h2>
                
                <form className="formulario">
                    <div className="grid-2">
                        <div className="campo">
                            <span className="detalle-sigilo">NOMBRE COMPLETO</span>
                            <input className="entrada" type="text" placeholder="Angela..." />
                        </div>
                        <div className="campo">
                            <span className="detalle-sigilo">EMAIL PROFESIONAL</span>
                            <input className="entrada" type="email" placeholder="angela@empresa.com" />
                        </div>
                    </div>

                    <div className="grid-2 mt-m">
                        <div className="campo">
                            <span className="detalle-sigilo">EMPRESA / ORGANIZACIÓN</span>
                            <input className="entrada" type="text" placeholder="TU EMPRESA..." />
                        </div>
                        <div className="campo">
                            <span className="detalle-sigilo">TIPO DE SOLICITUD</span>
                            <select className="selector">
                                <option value="freelance">PROYECTO FREELANCE</option>
                                <option value="contract">OPORTUNIDAD LABORAL</option>
                                <option value="collab">COLABORACIÓN ESTRATÉGICA</option>
                                <option value="other">OTRAS CONSULTAS</option>
                            </select>
                        </div>
                    </div>

                    <div className="campo mt-m">
                        <span className="detalle-sigilo">DETALLES DE LA PROPUESTA</span>
                        <textarea className="area-texto" rows="3" placeholder="DESCRIBE BREVEMENTE TU VISIÓN O REQUERIMIENTOS..."></textarea>
                    </div>

                    <button type="submit" className="boton mt-m">
                        Enviar Propuesta
                    </button>
                </form>
            </div>
        </section>
    );
}