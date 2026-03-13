import { useState, useEffect } from "react";

export default function ModoColor() {
    // Inicializamos el estado basado en lo que el navegador prefiera o lo que esté guardado
    const [oscuro, setOscuro] = useState(() => {
        const guardado = localStorage.getItem("tema");
        return guardado ? guardado === "oscuro" : true; // Por defecto oscuro (muy profesional)
    });

    useEffect(() => {
        const body = document.body;
        if (oscuro) {
            body.classList.add("modo-oscuro");
            body.classList.remove("modo-claro");
            localStorage.setItem("tema", "oscuro");
        } else {
            body.classList.add("modo-claro");
            body.classList.remove("modo-oscuro");
            localStorage.setItem("tema", "claro");
        }
    }, [oscuro]);

    return (
        <div className="selector-modo">
            <button 
                onClick={() => setOscuro(!oscuro)}
                className="boton-toggle"
                aria-label="Cambiar modo de color"
            >
                <img 
                    src="/tema-icon.png" 
                    alt="Cambiar Tema" 
                    className={`icono-tema ${oscuro ? 'invertido' : ''}`}
                />
            </button>
        </div>
    );
}
