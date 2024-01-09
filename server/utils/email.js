const nodemailer = require('nodemailer');

// Configura el transporte para enviar correos electrónicos
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otros servicios como 'smtp.gmail.com'
  auth: {
    user: 'tuCorreo@gmail.com', // Reemplaza con tu dirección de correo
    pass: 'tuContraseña', // Reemplaza con tu contraseña
  },
});

// Función para enviar un correo electrónico
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'tuCorreo@gmail.com', // Reemplaza con tu dirección de correo
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
