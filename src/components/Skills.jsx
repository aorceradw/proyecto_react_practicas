const SKILLS = [
    {
        id: 1,
        categoria: 'Diseño',
        ref: 'CAT_01',
        items: [
            'Figma',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Lightroom',
            'Canva Pro',
        ]
    },
    {
        id: 2,
        categoria: 'Desarrollo',
        ref: 'CAT_02',
        items: [
            'React',
            'HTML / CSS',
            'JavaScript',
            'Vite',
            'Node.js',
            'Express',
            'MySQL',
            'Git',
        ]
    },
    {
        id: 3,
        categoria: 'Consultoría',
        ref: 'CAT_03',
        items: [
            'Imagen corporativa',
            'Branding',
            'Identidad visual',
            'Asesoría de imagen',
            'Manual de marca',
        ]
    },
];

export default function Skills() {
    return (
        <section className="skills">

            <div className="skills-cabecera">
                <span className="etiqueta">Stack y herramientas</span>
                <h2 className="skills-titulo">Skills</h2>
            </div>

            <div className="skills-grid">
                {SKILLS.map((categoria, indexCat) => (
                    <div
                        key={categoria.id}
                        className={`skills-columna animar retraso-${indexCat + 1}`}
                    >
                        {/* Cabecera de categoría */}
                        <div className="skills-columna-cabecera">
                            <span className="skills-ref">{categoria.ref}</span>
                            <h3 className="skills-categoria">{categoria.categoria}</h3>
                        </div>

                        {/* Chips */}
                        <ul className="skills-lista">
                            {categoria.items.map((skill, indexSkill) => (
                                <li
                                    key={skill}
                                    className="skill-chip"
                                    style={{ animationDelay: `${(indexCat * 0.15) + (indexSkill * 0.05)}s` }}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>

        </section>
    );
}