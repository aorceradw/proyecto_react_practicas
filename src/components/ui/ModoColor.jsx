import React, { useState, useEffect } from 'react';

export default function ModoColor() {
    const [oscuro, setOscuro] = useState(() => {
        const guardado = localStorage.getItem('modo-color');
        return guardado === 'oscuro';
    });

    useEffect(() => {
        if (oscuro) {
            document.body.classList.add('modo-oscuro');
            localStorage.setItem('modo-color', 'oscuro');
        } else {
            document.body.classList.remove('modo-oscuro');
            localStorage.setItem('modo-color', 'claro');
        }
    }, [oscuro]);

    return (
        <button 
            onClick={() => setOscuro(!oscuro)} 
            className="boton-tema"
            aria-label="Alternar visión del sistema"
        >
            <div className="circulo-tema"></div>
        </button>
    );
}
