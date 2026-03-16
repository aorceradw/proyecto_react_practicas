import { useState, useEffect } from 'react';

export default function ModoColor() {
  const [oscuro, setOscuro] = useState(() => {
    // Comprobar preferencia guardada o sistema
    const guardado = localStorage.getItem('tema');
    if (guardado) return guardado === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.body;
    if (oscuro) {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
      localStorage.setItem('tema', 'dark');
    } else {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
      localStorage.setItem('tema', 'light');
    }
  }, [oscuro]);

  return (
    <div className="switch-estetico" onClick={() => setOscuro(!oscuro)} style={{ cursor: 'pointer' }}>
      <span className="switch-txt">DARK</span>
      <div className="switch-tema">
        <div className="switch-pista">
          <div className="switch-circulo" />
        </div>
      </div>
      <span className="switch-txt">LIGHT</span>
    </div>
  );
}
