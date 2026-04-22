/**
 * Servidor Express principal
 * Punto de entrada de la API backend
 * 
 * Estructura profesional con:
 * - Config centralizada
 * - Middleware separado
 * - Controladores y servicios
 * - Manejo de errores robusto
 */

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import pool from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ============= MIDDLEWARE =============
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ============= HEALTH CHECK =============
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date(), version: '1.0.0' });
});

// ============= API ROUTES =============
app.use('/api/contact', contactRoutes);

// TODO: Añadir más rutas según sea necesario
// app.use('/api/projects', projectRoutes);
// app.use('/api/testimonials', testimonialRoutes);

// ============= ERROR HANDLING =============
app.use(notFoundHandler);
app.use(errorHandler);

// ============= SERVIDOR =============
app.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║     🚀 Backend Server Iniciado       ║');
  console.log(`║     URL: http://localhost:${PORT}       ║`);
  console.log(`║     Ambiente: ${(process.env.NODE_ENV || 'development').padEnd(28)}║`);
  console.log('╚════════════════════════════════════════╝\n');
});

export default app;

// RUTA PARA OPINIONES
app.post('/api/opiniones', (req, res) => {
    const { autor, rol, cita } = req.body;
    const query = 'INSERT INTO opiniones (autor, rol, cita) VALUES (?, ?, ?)';
    
    db.query(query, [autor, rol, cita], (err, result) => {
        if (err) {
            console.error('Error al insertar opinión:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send('Opinión guardada correctamente');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`funcionando en http://localhost:${PORT}`);
});