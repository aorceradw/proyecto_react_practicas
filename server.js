import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL (XAMPP)');
});

// Ruta para recibir los datos del formulario
app.post('/api/contacto', (req, res) => {
    const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;
    
    const query = 'INSERT INTO contactos (nombre, email, empresa, tipo_solicitud, mensaje) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, email, empresa, tipo_solicitud, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al guardar el mensaje');
        } else {
            res.status(200).send('Mensaje guardado correctamente');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
