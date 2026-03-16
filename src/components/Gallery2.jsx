import { useState } from 'react';

const proyectos = [
  { id: 1, categoria: 'web', src: '/web/image.png', alt: 'Vortex UI', titulo: 'Vortex UI', desc: 'Interfaces de alto impacto.', tam: 'ancho' },
  { id: 2, categoria: 'web', src: '/web/image (1).png', alt: 'Evolve', titulo: 'Evolve', desc: 'Desarrollo escalable.', tam: 'medio' },
  { id: 3, categoria: 'web', src: '/web/image (2).png', alt: 'Minimal Lux', titulo: 'Minimal Lux', desc: 'Estética y solvencia.', tam: 'total' },
  { id: 4, categoria: 'diseño', src: '/diseño/poster.png', alt: 'Poster Art', titulo: 'Poster Art', desc: 'Composición tipográfica.' },
  { id: 5, categoria: 'branding', src: '/branding/lavivienne.jpg', alt: 'La Vivienne', titulo: 'La Vivienne', desc: 'Identidad de moda.' },
  { id: 6, categoria: 'branding', src: '/branding/nokia.jpg', alt: 'Nokia Rebrand', titulo: 'Nokia Rebrand', desc: 'Concepto estratégico.' },
  { id: 7, categoria: 'diseño', src: '/diseño/starstar.png', alt: 'Starstar', titulo: 'Starstar', desc: 'Diseño geométrico.' },
  { id: 8, categoria: 'diseño', src: '/diseño/recurso.png', alt: 'Recurso Visual', titulo: 'Recurso Visual', desc: 'Assets de marca.' },
];

export default function Gallery2() {
  const [activa, setActiva] = useState('Todos');
  const [lightbox, setLightbox] = useState(null);
  const [desplazamiento, setDesplazamiento] = useState(0);

  const categorias = ['Todos', 'Diseño', 'Branding', 'Web'];

  const filtrados = proyectos.filter(p => activa === 'Todos' || p.categoria === activa.toLowerCase());
  const filtradosCarrusel = filtrados.filter(p => p.categoria !== 'web');
  const filtradosWeb = filtrados.filter(p => p.categoria === 'web');

  const moverCarrusel = (dir) => {
    const max = filtradosCarrusel.length - 1;
    if (dir === 'der') setDesplazamiento(prev => Math.min(prev + 1, max));
    else setDesplazamiento(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="contenedor-galeria">
      <nav className="filtros-galeria animar">
        {categorias.map(cat => (
          <button 
            key={cat} 
            className={activa === cat ? 'filtro-btn activo' : 'filtro-btn'}
            onClick={() => { setActiva(cat); setDesplazamiento(0); }}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="contenido-filtrado animar retraso-1">
        {filtradosCarrusel.length > 0 && (activa === 'Todos' || activa === 'Diseño' || activa === 'Branding') && (
          <div className="carrusel-contenedor">
            <div 
              className="carrusel-pista" 
              style={{ transform: `translateX(-${desplazamiento * 480}px)` }}
            >
              {filtradosCarrusel.map(p => (
                <div key={p.id} className="carrusel-item" onClick={() => setLightbox(p)}>
                  <img src={p.src} alt={p.alt} className="carrusel-img" />
                </div>
              ))}
            </div>
            <div className="carrusel-controles">
              <button className="btn-ctrl" onClick={() => moverCarrusel('izq')} disabled={desplazamiento === 0}>←</button>
              <button className="btn-ctrl" onClick={() => moverCarrusel('der')} disabled={desplazamiento >= filtradosCarrusel.length - 1}>→</button>
            </div>
          </div>
        )}

        {filtradosWeb.length > 0 && (activa === 'Todos' || activa === 'Web') && (
          <div className="grid-web">
            {filtradosWeb.map(p => (
              <div key={p.id} className={`grid-item ${p.tam}`} onClick={() => setLightbox(p)}>
                <img src={p.src} alt={p.alt} className="grid-img" />
                <div className="grid-overlay">
                  <span className="etiqueta" style={{color: '#fff'}}>Ver proyecto</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="btn-cerrar" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
