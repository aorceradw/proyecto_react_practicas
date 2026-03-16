export default function Opiniones() {
  return (
    <section className="opiniones">
      <div className="opiniones-cabecera animar">
        <span className="etiqueta">Lo que dicen</span>
      </div>

      <div className="opinion animar retraso-1">
        <span className="opinion-marcador">✦</span>
        <div className="opinion-contenido">
          <blockquote className="opinion-cita">
            "Angela entiende la marca antes de escribir una sola línea de código. 
            Técnica, directa y con una visión estética que marca la diferencia."
          </blockquote>
          <span className="opinion-autor">CEO — Tecnología y estrategia</span>
        </div>
      </div>

      <div className="opinion animar retraso-2">
        <span className="opinion-marcador">✦</span>
        <div className="opinion-contenido">
          <blockquote className="opinion-cita">
            "Combinar asesoría de imagen con desarrollo web nos dio una coherencia 
            visual que antes no teníamos. Supo leer exactamente lo que necesitábamos."
          </blockquote>
          <span className="opinion-autor">Directora — Identidad de marca</span>
        </div>
      </div>
    </section>
  );
}
