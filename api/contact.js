// Vercel serverless function for contact form
// This handles form submissions and could send emails via a service like SendGrid, Nodemailer, etc.

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Here you would typically send an email using a service like:
    // - SendGrid (https://sendgrid.com/)
    // - Resend (https://resend.com/)
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, just log and return success
    console.log('Contact form submission:', { name, email, message })

    // In production, you would configure environment variables in Vercel:
    // - SENDGRID_API_KEY
    // - TO_EMAIL (your email address)
    // Then use a library to send the actual email

    /*
    Example with SendGrid (after npm install @sendgrid/mail):
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: process.env.TO_EMAIL || 'siame.romain.scw@gmail.com',
      from: process.env.FROM_EMAIL,
      subject: `Nouveau message depuis le portfolio de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`
    }
    
    await sgMail.send(msg)
    */

    return res.status(200).json({ 
      success: true, 
      message: 'Message received! (Email sending not configured yet)' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
