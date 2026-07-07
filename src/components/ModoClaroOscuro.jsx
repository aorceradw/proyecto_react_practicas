import { useState, useEffect } from 'react';

export default function ToggleTema() {
    // ⚡ Bolt Optimization: Use lazy state initialization to read from localStorage.
    // This avoids a redundant second render and ensures the correct theme is applied instantly.
    // Added safety check for 'window' to support potential SSR environments.
    const [oscuro, setOscuro] = useState(() => {
        if (typeof window !== 'undefined') {
            const guardado = localStorage.getItem('tema');
            return guardado ? guardado === 'oscuro' : true;
        }
        return true;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
        localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
    }, [oscuro]);

    return (
        <button
            className="toggle-tema"
            onClick={() => setOscuro(!oscuro)}
            aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            <span className="toggle-tema-icono">
                {oscuro ? '☆' : '★'}
            </span>
            <span className="toggle-tema-texto">
                {oscuro ? 'MODO OSCURO' : 'MODO CLARO'}
            </span>
        </button>
    );
}
