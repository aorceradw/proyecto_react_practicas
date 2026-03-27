
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS opiniones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    autor VARCHAR(255) NOT NULL,
    rol VARCHAR(255),
    cita TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO opiniones (autor, rol, cita) VALUES
('Nombre cliente 1', 'CEO — Empresa', 'Angela entiende la marca antes de escribir una sola línea de código. Técnica, directa y con una visión estética que marca la diferencia.'),
('Nombre cliente 2', 'Directora — Identidad de marca', 'Combinar asesoría de imagen con desarrollo web nos dio una coherencia visual que antes no teníamos. Supo leer exactamente lo que necesitábamos.');

-- Crear la tabla para los mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
