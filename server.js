import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// --- RUTAS DE CONTACTO ---
app.post('/api/contactos', (req, res) => {
    const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;
    const query = 'INSERT INTO contactos (nombre, email, empresa, tipo_solicitud, mensaje) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, email, empresa, tipo_solicitud, mensaje], (err, _result) => {
        if (err) {
            console.error('Error al insertar contacto:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send('Mensaje guardado correctamente');
    });
});

// --- RUTAS DE OPINIONES ---
app.get('/api/opiniones', (_req, res) => {
    const query = 'SELECT * FROM opiniones ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/api/opiniones', (req, res) => {
    const { autor, rol, cita } = req.body;
    const query = 'INSERT INTO opiniones (autor, rol, cita) VALUES (?, ?, ?)';
    
    db.query(query, [autor, rol, cita], (err, _result) => {
        if (err) {
            console.error('Error al insertar opinión:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send('Opinión guardada correctamente');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});