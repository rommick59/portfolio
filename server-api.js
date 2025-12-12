require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Route API de contact
app.post('/api/contact', async (req, res) => {
  try {
    const contactHandler = require('./api/contact');
    await contactHandler(req, res);
  } catch (error) {
    console.error('Erreur API contact:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route API de test
app.get('/api/hello', (req, res) => {
  res.status(200).json({ 
    message: 'Hello from API!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`✅ Serveur API lancé sur http://localhost:${PORT}`);
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`📧 Email : ${process.env.EMAIL_USER || '❌ Non configuré'}`);
  console.log(`🔐 Mot de passe : ${process.env.EMAIL_PASSWORD ? '✅ Configuré' : '❌ Non configuré'}`);
  console.log('═══════════════════════════════════════════════════════════');
  console.log('📡 Endpoints disponibles :');
  console.log(`   POST http://localhost:${PORT}/api/contact`);
  console.log(`   GET  http://localhost:${PORT}/api/hello`);
  console.log('═══════════════════════════════════════════════════════════');
  if (!process.env.EMAIL_PASSWORD) {
    console.log('⚠️  Configurez .env pour activer le formulaire de contact');
    console.log('   Voir : LIRE_MOI_IMPORTANT.txt');
    console.log('═══════════════════════════════════════════════════════════');
  }
});
