const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Esto fuerza a buscar el .env en la misma carpeta que este archivo
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(cors());
app.use(express.json());

// Verificación rápida en consola al arrancar
console.log('--- Configuración ---');
console.log('Email:', process.env.EMAIL_USER || 'No cargado');
console.log('Pass:', process.env.EMAIL_PASS ? 'Cargada' : 'No cargada');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contactos', async (req, res) => {
    const { nombre, email, empresa, tipo_solicitud, mensaje } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contacto de ${nombre} - ${tipo_solicitud}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Nuevo mensaje del formulario</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Empresa:</strong> ${empresa || 'N/A'}</p>
                <p><strong>Asunto:</strong> ${tipo_solicitud}</p>
                <hr>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado correctamente');
        res.status(200).json({ enviado: true });
    } catch (error) {
        console.error('Error en Nodemailer:', error.message);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));