const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio_db'
};

// Configurar el transporter de email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

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

// Guardar un mensaje de contacto + enviar email
app.post('/api/contactos', async (req, res) => {
    try {
        const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        // Guardar en MySQL
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO contactos (nombre, email, empresa, tipo_solicitud, mensaje) VALUES (?, ?, ?, ?, ?)',
            [nombre, email, empresa || '', tipo_solicitud || '', mensaje]
        );
        await connection.end();

        // Enviar email de notificación
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${nombre} — Portfolio`,
            html: `
                <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 2rem; background: #12111A; color: #ECE8E1;">
                    <h2 style="color: #E8C4BC; letter-spacing: 0.1em; text-transform: uppercase;">Nuevo contacto</h2>
                    <hr style="border-color: rgba(236,232,225,0.1); margin: 1.5rem 0;" />
                    <p><strong style="color: #C8D4E8;">Nombre:</strong> ${nombre}</p>
                    <p><strong style="color: #C8D4E8;">Email:</strong> ${email}</p>
                    <p><strong style="color: #C8D4E8;">Empresa:</strong> ${empresa || '—'}</p>
                    <p><strong style="color: #C8D4E8;">Servicio:</strong> ${tipo_solicitud || '—'}</p>
                    <hr style="border-color: rgba(236,232,225,0.1); margin: 1.5rem 0;" />
                    <p><strong style="color: #C8D4E8;">Mensaje:</strong></p>
                    <p style="color: rgba(236,232,225,0.7); line-height: 1.8;">${mensaje}</p>
                </div>
            `
        });

        // Email de confirmación al cliente
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'He recibido tu mensaje — Angela',
            html: `
                <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 2rem; background: #12111A; color: #ECE8E1;">
                    <h2 style="color: #E8C4BC; letter-spacing: 0.1em; text-transform: uppercase;">Hola ${nombre}</h2>
                    <hr style="border-color: rgba(236,232,225,0.1); margin: 1.5rem 0;" />
                    <p style="color: rgba(236,232,225,0.7); line-height: 1.8;">
                        He recibido tu mensaje y te responderé lo antes posible.
                    </p>
                    <p style="color: rgba(236,232,225,0.7); line-height: 1.8;">
                        Gracias por contactar.
                    </p>
                    <hr style="border-color: rgba(236,232,225,0.1); margin: 1.5rem 0;" />
                    <p style="color: #E8C4BC; font-size: 0.8rem;">Angela — Granada</p>
                </div>
            `
        });

        res.status(201).json({ 
            message: 'Mensaje enviado con éxito',
            id: result.insertId
        });

    } catch (error) {
        console.error('Error al guardar contacto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
