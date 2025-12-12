# 📧 Configuration du Formulaire de Contact

Votre formulaire de contact est maintenant configuré pour envoyer des emails à **siame.romain.scw@gmail.com** en utilisant Nodemailer.

## 🚀 Installation

1. **Installer les dépendances** :
```bash
npm install
```

## 🔐 Configuration Gmail

Pour que l'envoi d'emails fonctionne, vous devez créer un **mot de passe d'application Gmail** :

### Étapes pour créer un mot de passe d'application :

1. Allez sur votre compte Google : https://myaccount.google.com/
2. Cliquez sur **Sécurité** dans le menu de gauche
3. Activez la **Validation en deux étapes** si ce n'est pas déjà fait
4. Une fois activée, revenez dans **Sécurité**
5. Cherchez **Mots de passe des applications** (ou allez directement sur : https://myaccount.google.com/apppasswords)
6. Créez un nouveau mot de passe d'application :
   - Sélectionnez l'application : **Autre (nom personnalisé)**
   - Nommez-le : **Portfolio Contact Form**
7. Copiez le mot de passe généré (16 caractères)

### Configurer les variables d'environnement :

**En local** :
Éditez le fichier `.env` à la racine du projet :
```env
EMAIL_USER=siame.romain.scw@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_application_ici
```

**Sur Vercel** :
1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez :
   - `EMAIL_USER` : `siame.romain.scw@gmail.com`
   - `EMAIL_PASSWORD` : votre mot de passe d'application (16 caractères)

## 🧪 Tester en local

```bash
npm run start:local
```

Puis testez le formulaire de contact sur votre site.

## 📤 Déploiement

Après avoir configuré les variables d'environnement sur Vercel :

```bash
npm run vercel-deploy
```

## ✨ Fonctionnalités

- ✅ Validation des champs (nom, email, message)
- ✅ Validation du format email
- ✅ Email HTML formaté joliment
- ✅ Fonction "Reply-To" pour répondre directement
- ✅ Messages d'erreur en français
- ✅ Protection CORS

## 📧 Format de l'email reçu

Vous recevrez un email contenant :
- Le nom de l'expéditeur
- L'adresse email (vous pouvez répondre directement)
- Le message complet
- Design HTML professionnel avec votre couleur de marque (#007bff)

## 🔒 Sécurité

- ⚠️ **Ne commitez JAMAIS** votre fichier `.env` avec le mot de passe
- ✅ Le fichier `.env` est dans `.gitignore`
- ✅ Utilisez toujours un mot de passe d'application, jamais votre mot de passe Gmail principal

## 🐛 Dépannage

Si l'envoi d'email ne fonctionne pas :

1. Vérifiez que la validation en deux étapes est activée sur votre compte Gmail
2. Vérifiez que le mot de passe d'application est correct (16 caractères sans espaces)
3. Vérifiez les logs Vercel pour voir les erreurs
4. Assurez-vous que les variables d'environnement sont bien configurées sur Vercel

## 📝 Alternative : Gmail bloqué ?

Si Gmail bloque l'envoi, vous pouvez utiliser d'autres services :

### Option 1 : Mailtrap (pour tests)
```javascript
service: 'Mailtrap',
// Configuration dans .env
```

### Option 2 : SendGrid (gratuit jusqu'à 100 emails/jour)
```bash
npm install @sendgrid/mail
```

### Option 3 : Mailgun, AWS SES, etc.
