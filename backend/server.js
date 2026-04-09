import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión configurada con los datos de .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error: No se pudo conectar a la DB. ¿Está XAMPP encendido?', err.message);
        return;
    }
    console.log('¡Conectado con éxito a portfolio_db!');
});

// RUTA PARA CONTACTOS (POST)
app.post('/api/contactos', (req, res) => {
    const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;
    
    const query = 'INSERT INTO contactos (nombre, email, empresa, tipo_solicitud, mensaje) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, email, empresa, tipo_solicitud, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar contacto:', err);
            return res.status(500).json({ error: 'Error al guardar en la base de datos' });
        }
        res.status(200).json({ message: 'Mensaje recibido y guardado', id: result.insertId });
    });
});

// RUTA PARA OPINIONES ( Para leerlas)
app.get('/api/opiniones', (req, res) => {
    const query = 'SELECT * FROM opiniones ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// RUTA PARA OPINIONES
app.post('/api/opiniones', (req, res) => {
    const { autor, rol, cita } = req.body;
    const query = 'INSERT INTO opiniones (autor, rol, cita) VALUES (?, ?, ?)';
    
    db.query(query, [autor, rol, cita], (err, result) => {
        if (err) {
            console.error('Error al insertar opinión:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Opinión guardada correctamente', id: result.insertId });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`funcionando en http://localhost:${PORT}`);
});