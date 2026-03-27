import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

export default function ClickImagen({ imagen, onClose }) {
    const cardRef = useRef(null);
    const [tOrigin, setTOrigin] = useState('50% 50%');

    // Hover Tilt values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

    // Glare position
    const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), springConfig);
    const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 80]), springConfig);
    const xPct = useMotionTemplate`${glareX}%`;
    const yPct = useMotionTemplate`${glareY}%`;

    // Spin value
    const baseRotationValue = useMotionValue(0);
    const spinRotateY = useSpring(baseRotationValue, { stiffness: 50, damping: 15 });

    // Combine tilt and spin for rotateY
    const combinedRotateY = useTransform(
        [tiltY, spinRotateY],
        ([tilt, spin]) => tilt + spin
    );

    // Jell-o elastic drag effect (Stronger, shorter pull distance)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const stretchX = useTransform(x, [-250, 0, 250], [1.35, 1, 1.35]);
    const squashX = useTransform(y, [-250, 0, 250], [0.75, 1, 0.75]);
    const elasticScaleX = useTransform([stretchX, squashX], ([st, sq]) => st * sq);

    const stretchY = useTransform(y, [-250, 0, 250], [1.35, 1, 1.35]);
    const squashY = useTransform(x, [-250, 0, 250], [0.75, 1, 0.75]);
    const elasticScaleY = useTransform([stretchY, squashY], ([st, sq]) => st * sq);

    const skewX = useTransform(x, [-250, 0, 250], [-20, 0, 20]);
    const skewY = useTransform(y, [-250, 0, 250], [20, 0, -20]);

    if (!imagen) return null;

    const handlePointerDown = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const xPctObj = (clientX - rect.left) / rect.width;
        const yPctObj = (clientY - rect.top) / rect.height;

        // Set origin to the OPPOSITE side of the click to anchor the stretch
        setTOrigin(`${(1 - xPctObj) * 100}% ${(1 - yPctObj) * 100}%`);
    };

    const handlePointerMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const xPctObj = (clientX - rect.left) / rect.width - 0.5;
        const yPctObj = (clientY - rect.top) / rect.height - 0.5;

        mouseX.set(xPctObj);
        mouseY.set(yPctObj);
    };

    const handlePointerLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleDragEnd = (e, info) => {
        // Only spin if they dragged a bit or with some velocity
        const distance = Math.abs(info.offset.x) + Math.abs(info.offset.y);
        if (distance > 10 || Math.abs(info.velocity.x) > 50) {
            const spinDirection = info.offset.x > 0 ? 1 : -1;
            baseRotationValue.set(baseRotationValue.get() + (360 * spinDirection));
        } else {
             // If it was just a click with no movement, spin anyway
             baseRotationValue.set(baseRotationValue.get() + 360);
        }
        
        // Reset tilt on drop
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="click-imagen-overlay">
            <div style={{ position: 'absolute', top: '2rem', right: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1010 }}>
                <span style={{ 
                    fontFamily: 'var(--pixel)', 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.2em', 
                    textTransform: 'uppercase', 
                    color: 'var(--text)', 
                    opacity: 0.8 
                }}>
                    Salir de la vista
                </span>
                <button className="click-imagen-close" onClick={onClose} style={{ position: 'static', margin: 0, padding: 0 }}>&times;</button>
            </div>
            <div className="click-imagen-wrapper" style={{ perspective: 1000 }}>
                <motion.div
                    className="click-imagen-content"
                    ref={cardRef}
                    onClick={(e) => e.stopPropagation()}
                    
                    // Framer motion drag setup
                    drag
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    dragElastic={0.65} // Allow pulling like a rubber band significantly
                    onDragEnd={handleDragEnd}

                    // Custom Pointer events for 3D tilt and glare
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerOut={handlePointerLeave}
                    onTouchStart={handlePointerDown}
                    onTouchMove={handlePointerMove}
                    onTouchEnd={handlePointerLeave}
                    onTouchCancel={handlePointerLeave}

                    style={{
                        x, y,
                        rotateX: tiltX,
                        rotateY: combinedRotateY,
                        scaleX: elasticScaleX,
                        scaleY: elasticScaleY,
                        skewX: skewX,
                        skewY: skewY,
                        transformOrigin: tOrigin,
                        cursor: 'grab',
                        '--x': xPct,
                        '--y': yPct
                    }}
                    whileDrag={{ cursor: 'grabbing', scale: 1.1 }} // emphasize it's being pulled
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={imagen.img} alt={imagen.titulo} className="click-imagen-img" />
                    <div className="click-imagen-glare"></div>
                </motion.div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <p className="click-imagen-caption">{imagen.titulo}</p>
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
                        <p style={{
                            fontFamily: 'var(--pixel)',
                            fontSize: '0.85rem',
                            letterSpacing: '0.15em',
                            color: 'var(--rose)',
                            textTransform: 'uppercase',
                        }}>
                            ✧ INTERACTÚA CON LA OBRA ✧
                        </p>
                        <p style={{
                            fontFamily: 'var(--body)',
                            fontSize: '0.75rem',
                            color: 'var(--muted)',
                            letterSpacing: '0.05em'
                        }}>
                            Mantén pulsado, estira la imagen y suéltala para ver el efecto
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
