import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS_DATA = [
  { id: 1, title: "Back-end Architecture", label: "01. Estructura", type: "ancho", img: "/fotos/back.jpg" },
  { id: 2, title: "Front-end Sensitivity", label: "02. Interfaz", type: "medio", img: "/fotos/front.jpg" },
  { id: 3, title: "Brand Introspection", label: "03. Estructura", type: "total", img: "/fotos/intro.jpg" },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3, 
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function GaleriaHome() {
  const styles = {
    etiqueta: { fontFamily: 'VT323, monospace' },
    tituloSeccion: { fontFamily: '"Jacquard 12", display' },
    cardTitle: { fontFamily: 'Oswald, sans-serif' },
    cardLabel: { fontFamily: 'VT323, monospace' }
  };

  return (
    <section className="galeria-home">
      
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="galeria-home-cabecera"
      >
        <span className="etiqueta" style={styles.etiqueta}>CODE x ART</span>
        <h2 className="galeria-home-titulo" style={styles.tituloSeccion}>
          Systems with soul
        </h2>
      </motion.header>

      <motion.ul 
        className="galeria-home-lista"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {PROJECTS_DATA.map((card) => (
          <motion.li 
            key={card.id} 
            variants={itemVariants}
            className={`galeria-home-item galeria-home-item--${card.type}`}
            whileHover={{ y: -5 }} // Pequeño levantamiento al hacer hover
          >
            <figure className="img-container">
              <img src={card.img} alt={card.title} className="galeria-home-imagen" />
              <div className="noise-overlay"></div>
            </figure>

            <div className="galeria-home-info">
              <span className="card-label" style={styles.cardLabel}>{card.label}</span>
              <h3 className="card-title" style={styles.cardTitle}>{card.title}</h3>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}