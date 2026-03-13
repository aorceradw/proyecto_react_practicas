import { useState } from "react";

export default function Form() {
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        empresa: "",
        servicio: "Desarrollo web",
        mensaje: ""
    });
    const [estado, setEstado] = useState({ enviando: false, exito: false, error: null });

    const manejarCambio = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setEstado({ enviando: true, exito: false, error: null });

        try {
            const respuesta = await fetch("http://localhost:3001/api/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });

            if (respuesta.ok) {
                setEstado({ enviando: false, exito: true, error: null });
                setDatos({ nombre: "", email: "", empresa: "", servicio: "Desarrollo web", mensaje: "" });
            } else {
                throw new Error("Error al conectar");
            }
        } catch {
            setEstado({ enviando: false, exito: false, error: "No se pudo enviar el mensaje. Inténtalo de nuevo." });
        }
    };

    return (
        <section id="contacto" className="seccion-contacto">
            <div>
                <span className="etiqueta contacto-etiqueta animar">Contacto</span>
                <h2 className="contacto-titulo texto-cromo animar retraso-1">Iniciar<br />proyecto</h2>
            </div>

            <form onSubmit={manejarEnvio} className="animar retraso-2">
                <div className="form-campo">
                    <label>Nombre completo</label>
                    <input type="text" name="nombre" value={datos.nombre} onChange={manejarCambio} required className="form-input" />
                </div>

                <div className="form-campo">
                    <label>Email</label>
                    <input type="email" name="email" value={datos.email} onChange={manejarCambio} required className="form-input" />
                </div>

                <div className="form-campo">
                    <label>Empresa (opcional)</label>
                    <input type="text" name="empresa" value={datos.empresa} onChange={manejarCambio} className="form-input" />
                </div>

                <div className="form-campo">
                    <label>Servicio requerido</label>
                    <select name="servicio" value={datos.servicio} onChange={manejarCambio} className="form-input">
                        <option value="Desarrollo web">Desarrollo web</option>
                        <option value="Imagen corporativa">Imagen corporativa</option>
                        <option value="Diseño de marca">Diseño de marca</option>
                        <option value="Diseño gráfico">Diseño gráfico</option>
                        <option value="Otra cosa">Otra cosa</option>
                    </select>
                </div>

                <div className="form-campo form-campo-final">
                    <label>Mensaje</label>
                    <textarea name="mensaje" value={datos.mensaje} onChange={manejarCambio} required rows="4" className="form-input form-textarea"></textarea>
                </div>

                <button type="submit" disabled={estado.enviando} className="form-boton">
                    {estado.enviando ? "Procesando..." : "Enviar mensaje"}
                </button>

                {estado.exito && (
                    <p className="form-estado-exito">Mensaje enviado correctamente.</p>
                )}
                {estado.error && (
                    <p className="form-estado-error">{estado.error}</p>
                )}
            </form>
        </section>
    );
}