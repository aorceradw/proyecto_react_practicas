import { useState, useEffect } from 'react';

export default function ToggleTema() {
    // Lazy initialization of state to prevent double-render and sync with localStorage immediately
    const [oscuro, setOscuro] = useState(() => {
        const guardado = localStorage.getItem('tema');
        // Default to dark mode (true) if nothing is saved
        return guardado ? guardado === 'oscuro' : true;
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
