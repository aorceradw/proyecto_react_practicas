import React, { useState, useRef } from 'react';

export default function ClickImagen({ imagen, onClose }) {
    const [style, setStyle] = useState({});
    const cardRef = useRef(null);

    if (!imagen) return null;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: 'none',
            '--x': `${percentX}%`,
            '--y': `${percentY}%`
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease'
        });
    };

    return (
        <div className="click-imagen-overlay" onClick={onClose}>
            <button className="click-imagen-close" onClick={onClose}>&times;</button>
            <div 
                className="click-imagen-content" 
                onClick={(e) => e.stopPropagation()}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
                style={style}
            >
                <img src={imagen.img} alt={imagen.titulo} className="click-imagen-img" />
                <div className="click-imagen-glare"></div>
                <p className="click-imagen-caption">{imagen.titulo}</p>
            </div>
        </div>
    );
}
