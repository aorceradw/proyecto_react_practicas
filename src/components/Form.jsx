export default function Form() {
    return (
        <div id="formulario-container">
            <div className="section-header">
                <h2>Iniciemos la transformación</h2>
                <p>Escríbeme para elevar tu identidad corporativa y presencia digital</p>
            </div>
            <form id="formulario">
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
                <label htmlFor="email">Correo Corporativo</label>
                <input type="email" id="email" name="email" placeholder="email@empresa.com" />
                <label htmlFor="mensaje">Cuéntame sobre tu proyecto</label>
                <textarea id="mensaje" name="mensaje" placeholder="Describe brevemente tus necesidades de branding o desarrollo..."></textarea>
                <button type="submit">Solicitar Consulta</button>
            </form>
        </div>
    );
}