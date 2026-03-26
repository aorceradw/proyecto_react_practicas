import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Optimization: Use a connection pool for better performance and reliability.
// A pool allows multiple concurrent queries and manages connections automatically.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test pool connection on startup
pool.getConnection()
    .then(connection => {
        console.log('Conectado a la base de datos MySQL con Pool (XAMPP)');
        connection.release();
    })
    .catch(err => {
        console.error('Error conectando al Pool de MySQL:', err);
    });

// Optimization: Move the SQL query string outside the request handler to avoid unnecessary re-allocation.
const INSERT_CONTACTO_QUERY = 'INSERT INTO contactos (nombre, email, empresa, tipo_solicitud, mensaje) VALUES (?, ?, ?, ?, ?)';

// Optimization: Use async/await and pool.execute() for prepared statements.
// Prepared statements are faster for repeated queries and provide better security.
app.post('/api/contacto', async (req, res) => {
    const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;
    
    try {
        await pool.execute(INSERT_CONTACTO_QUERY, [nombre, email, empresa, tipo_solicitud, mensaje]);
        res.status(200).send('Mensaje guardado correctamente');
    } catch (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).send('Error al guardar el mensaje');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
