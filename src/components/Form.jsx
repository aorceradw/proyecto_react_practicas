import { useState } from 'react';

export default function Form() {
  const [estado, setEstado] = useState('idle'); // idle, enviando, ok, error

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEstado('enviando');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const resp = await fetch('http://localhost:3001/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (resp.ok) setEstado('ok');
      else setEstado('error');
    } catch {
      setEstado('error');
    }
  };

  return (
    <section className="seccion-contacto" id="contacto">
      <div className="label-col animar">
        <h2 className="label-grande titulo-stroke">Hablemos</h2>
      </div>

      <div className="form-col animar retraso-1">
        <form className="formulario" onSubmit={manejarEnvio}>
          <div className="form-fila">
            <div className="input-grp">
              <label>Tu nombre</label>
              <input type="text" name="nombre" required />
            </div>
            <div className="input-grp">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <div className="form-fila">
            <div className="input-grp">
              <label>Empresa</label>
              <input type="text" name="empresa" />
            </div>
            <div className="input-grp">
              <label>Servicio</label>
              <select name="servicio" required>
                <option value="">Selecciona</option>
                <option value="web">Desarrollo web</option>
                <option value="imagen-corp">Imagen corporativa</option>
                <option value="branding">Diseño de marca</option>
                <option value="diseño-gr">Diseño gráfico</option>
                <option value="asesoria">Asesoría de imagen</option>
                <option value="otro">Otra cosa</option>
              </select>
            </div>
          </div>

          <div className="input-grp">
            <label>Cuéntame más</label>
            <textarea name="mensaje" rows="4" required></textarea>
          </div>

          <button className="btn-enviar" type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado === 'ok' && <p className="msg-estado ok" style={{color: 'var(--rose)'}}>Mensaje enviado. Te contactaré pronto.</p>}
          {estado === 'error' && <p className="msg-estado error" style={{color: '#ff4d4d'}}>Hubo un error. Inténtalo de nuevo.</p>}
        </form>
      </div>
    </section>
  );
}
