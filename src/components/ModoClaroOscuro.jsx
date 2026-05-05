import { useState, useEffect } from 'react';

export default function ToggleTema() {
    // Inicialización perezosa (lazy initialization) para evitar re-renders innecesarios
    // y asegurar que el estado sea correcto desde el primer renderizado.
    const [oscuro, setOscuro] = useState(() => {
        const guardado = localStorage.getItem('tema');
        return guardado === null ? true : guardado === 'oscuro';
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