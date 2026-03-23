const SKILLS = [
    {
        id: 1,
        categoria: 'Diseño',
        items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Lightroom', 'Canva Pro'],
    },
    {
        id: 2,
        categoria: 'Desarrollo',
        items: ['React', 'HTML / CSS', 'JavaScript', 'Vite', 'Node.js', 'Express', 'MySQL', 'Git'],
    },
    {
        id: 3,
        categoria: 'Consultoría',
        items: ['Imagen corporativa', 'Branding', 'Identidad visual', 'Asesoría de imagen', 'Manual de marca'],
    },
];

export default function Skills() {
    return (
        <section className="skills">

            <div className="skills-cabecera">
                <span className="etiqueta">Stack y herramientas</span>
                <h2>Skills</h2>
            </div>

            <div className="skills-grid">
                {SKILLS.map(categoria => (
                    <div key={categoria.id} className="skills-columna">
                        <h3>{categoria.categoria}</h3>
                        <ul>
                            {categoria.items.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
}