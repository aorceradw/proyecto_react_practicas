export default function FormularioContacto() {
    return (
        <form className="formulario-contacto">
            <div className="formulario-grupo">
                <label htmlFor="nombre" className="formulario-etiqueta">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="formulario-input"
                    placeholder="Tu nombre completo"
                    required
                />
            </div>

            <div className="formulario-grupo">
                <label htmlFor="email" className="formulario-etiqueta">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="formulario-input"
                    placeholder="hola@ejemplo.com"
                    required
                />
            </div>

            <div className="formulario-grupo">
                <label htmlFor="mensaje" className="formulario-etiqueta">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    className="formulario-input formulario-textarea"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows="5"
                    required
                ></textarea>
            </div>

            <button type="submit" className="formulario-boton">
                Enviar mensaje
            </button>
        </form>
    );
}
