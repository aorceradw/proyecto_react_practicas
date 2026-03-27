import React, { useState, useEffect, useRef } from 'react';

const SKILLS = [
    {
        id: 1,
        categoria: 'Frontend',
        items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    },
    {
        id: 2,
        categoria: 'Backend',
        items: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Python', 'Java'],
    },
    {
        id: 3,
        categoria: 'Diseño',
        items: ['Figma', 'Affinity', 'Adobe Illustrator', 'Photoshop', 'Herramientas de video', 'Manuales de imagen corporativa', 'Identidad de marca'],
    },
    {
        id: 4,
        categoria: 'Herramientas',
        items: ['Git', 'GitHub', 'Vite', 'Cursor', 'VS Code'],
    },
];

function TicketItem({ categoria, delay }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`ticket-wrapper ${isFlipped ? 'flipped' : ''}`} 
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ '--delay': `${delay}s` }}
        >
            <div className="ticket-inner">
                {/* Front Side */}
                <div className="ticket-front ticket">
                    <div className="ticket-header">
                        <h3>{categoria.categoria}</h3>
                        <span className="ticket-meta">REF: 00{categoria.id} // SYS</span>
                    </div>
                    <ul className="ticket-items">
                        {categoria.items.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                    <div className="ticket-barcode"></div>
                </div>

                {/* Back Side */}
                <div className="ticket-back ticket">
                    <div className="ticket-header">
                        <h3>angela</h3>
                        <span className="ticket-meta">ID: {categoria.id} // VRFY</span>
                    </div>
                    <div className="ticket-back-content">
                        <p>gracias por ver // thanks for watching</p>
                        <div className="ticket-stamped">APROBADO</div>
                    </div>
                    <div className="ticket-barcode"></div>
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`skills ${isInView ? 'in-view' : ''}`}>
            <div className="skills-cabecera">
                <span className="etiqueta">Stack y herramientas</span>
                <h2>Skills</h2>
            </div>

            <div className="skills-grid ticket-grid">
                {SKILLS.map((categoria, index) => (
                    <TicketItem key={categoria.id} categoria={categoria} delay={index * 0.2} />
                ))}
            </div>
            <p className="skills-hint">Haz click para darles la vuelta</p>
        </section>
    );
}