require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Route API de contact
app.post('/api/contact', async (req, res) => {
  const contactHandler = require('./api/contact');
  await contactHandler(req, res);
});

// Route API de test
app.get('/api/hello', (req, res) => {
  const helloHandler = require('./api/hello');
  helloHandler(req, res);
});

// Toutes les autres routes renvoient le frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
  console.log(`📧 Email configuré : ${process.env.EMAIL_USER || 'Non configuré'}`);
  console.log(`🔐 Mot de passe : ${process.env.EMAIL_PASSWORD ? '✅ Configuré' : '❌ Non configuré'}`);
  console.log(`\n⚠️  Si le mot de passe n'est pas configuré, éditez le fichier .env`);
});
