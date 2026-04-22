/**
 * Controlador de contacto
 * Maneja las peticiones de contacto
 */

import { sendContactEmail } from '../services/emailService.js';

export const sendContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validaciones
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: true,
        message: 'Todos los campos son requeridos',
      });
    }

    // Enviar email
    const result = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
