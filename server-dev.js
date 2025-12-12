require('dotenv').config();
const express = require('express');
const { createServer: createViteServer } = require('vite');

async function createServer() {
  const app = express();
  
  // Middleware pour parser le JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

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
    try {
      const helloHandler = require('./api/hello');
      helloHandler(req, res);
    } catch (error) {
      console.error('Erreur API hello:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });

  // Créer le serveur Vite en mode dev
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  // Utiliser le middleware Vite
  app.use(vite.middlewares);

  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`✅ Serveur de développement lancé sur http://localhost:${PORT}`);
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`📧 Email configuré : ${process.env.EMAIL_USER || '❌ Non configuré'}`);
    console.log(`🔐 Mot de passe : ${process.env.EMAIL_PASSWORD ? '✅ Configuré' : '❌ Non configuré - Éditez .env'}`);
    console.log('═══════════════════════════════════════════════════════════');
    console.log('🚀 Frontend Vite : http://localhost:' + PORT);
    console.log('📡 API Contact : http://localhost:' + PORT + '/api/contact');
    console.log('📡 API Test : http://localhost:' + PORT + '/api/hello');
    console.log('═══════════════════════════════════════════════════════════');
    if (!process.env.EMAIL_PASSWORD) {
      console.log('⚠️  ATTENTION : Configurez le fichier .env pour que');
      console.log('   le formulaire de contact fonctionne !');
      console.log('   Voir : LIRE_MOI_IMPORTANT.txt');
      console.log('═══════════════════════════════════════════════════════════');
    }
  });
}

createServer().catch(err => {
  console.error('❌ Erreur lors du démarrage du serveur:', err);
  process.exit(1);
});
