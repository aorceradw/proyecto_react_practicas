const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

// Middlewares
app.use(cors()); // Permitir peticiones desde nuestro frontend React
app.use(express.json()); // Parsear el body de las peticiones como JSON

// Configurar la conexión a la base de datos MySQL (XAMPP por defecto no tiene contraseña en root)
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio_db'
};

// --- ENDPOINTS ---

// Obtener todas las opiniones
app.get('/api/opiniones', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM opiniones ORDER BY created_at DESC');
        await connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener opiniones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Crear una nueva opinión
app.post('/api/opiniones', async (req, res) => {
    try {
        const { autor, rol, cita } = req.body;

        if (!autor || !cita) {
            return res.status(400).json({ error: 'El autor y la cita son obligatorios' });
        }

        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO opiniones (autor, rol, cita) VALUES (?, ?, ?)',
            [autor, rol || '', cita]
        );
        await connection.end();

        res.status(201).json({ 
            message: 'Opinión creada con éxito', 
            id: result.insertId 
        });
    } catch (error) {
        console.error('Error al crear opinión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Guardar un mensaje de contacto
app.post('/api/contactos', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
            [nombre, email, mensaje]
        );
        await connection.end();

        res.status(201).json({ 
            message: 'Mensaje enviado con éxito',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error al guardar contacto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${port}`);
    console.log(`Recuerda iniciar MySQL en XAMPP y crear la base de datos 'portfolio_db'.`);
});
