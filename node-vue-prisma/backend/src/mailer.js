const nodemailer = require('nodemailer');
require('dotenv').config();

let usingEthereal = false;

async function createTransporter() {
  if (!process.env.SMTP_HOST || process.env.SMTP_HOST === 'smtp.example.com') {
    // Fallback: create Ethereal test account for development
    const testAccount = await nodemailer.createTestAccount();
    usingEthereal = true;
    console.log('Using Ethereal test SMTP account. Preview messages at the URL logged after send.');
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    } : undefined,
  });
}

async function sendContactMail({ name, email, message }) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: `${name || 'Site visitor'} <${email || process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Nouveau message depuis le site - ${name || 'inconnu'}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  const info = await transporter.sendMail(mailOptions);
  if (usingEthereal) {
    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('Ethereal preview URL:', previewUrl);
    return { info, previewUrl };
  }

  return { info };
}

module.exports = { sendContactMail };
