// Vercel serverless function for contact form
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Vérifier les variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Variables d\'environnement manquantes:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD
      });
      return res.status(500).json({ 
        error: 'Configuration email manquante. Contactez l\'administrateur.' 
      });
    }

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Format d\'email invalide' });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'siame.romain.scw@gmail.com',
      subject: `Nouveau message depuis le portfolio de ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #007bff; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f8f9fa; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #007bff; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 Nouveau message depuis votre portfolio</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nom :</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email :</span> ${email}
              </div>
              <div class="field">
                <span class="label">Message :</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nouveau message depuis votre portfolio

Nom: ${name}
Email: ${email}

Message:
${message}

---
Vous pouvez répondre directement à cet email pour contacter ${name}.
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    console.log('Email envoyé avec succès à siame.romain.scw@gmail.com');

    return res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès !' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    console.error('Stack trace:', error.stack);
    return res.status(500).json({ 
      error: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
