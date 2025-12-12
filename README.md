# Mon Portfolio

Portfolio personnel développé avec Vue.js 3, Vue Router, Bootstrap et déployable sur Vercel.

## 🚀 Fonctionnalités

- ✅ Site bilingue (Français / Anglais)
- ✅ Pages: Accueil, Compétences, Projets, Contact
- ✅ Navigation responsive avec Bootstrap 5
- ✅ Animations au scroll (Intersection Observer)
- ✅ Transitions de pages fluides
- ✅ **Formulaire de contact fonctionnel avec envoi d'emails**
- ✅ Prêt pour déploiement sur Vercel

## 📁 Structure du projet

```
Portfolio/
├── frontend/              # Application Vue.js
│   ├── src/
│   │   ├── components/    # Header, Footer
│   │   ├── pages/         # Pages FR et EN
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── api/                   # Fonctions serverless Vercel
│   ├── hello.js          # API de test
│   └── contact.js        # Traitement formulaire contact
├── vercel.json           # Configuration Vercel
├── package.json          # Scripts racine
└── README.md
```

## 🛠️ Développement local

### Prérequis
- Node.js 18+ ou 20+
- npm ou pnpm

### Installation et lancement

```powershell
# Installer les dépendances du frontend
cd frontend
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build local

```powershell
# Depuis la racine du projet
npm run build

# Ou directement depuis le dossier frontend
cd frontend
npm run build
```

## 🌐 Déploiement sur Vercel

### Option 1: Via le Dashboard Vercel (Recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Cliquer sur "New Project"
3. Importer votre repo GitHub `rommick59/Portfolio`
4. Vercel détectera automatiquement la configuration depuis `vercel.json`
5. Cliquer sur "Deploy"

### Option 2: Via CLI

```powershell
# Installer Vercel CLI (si pas déjà fait)
npm i -g vercel

# Se connecter
npx vercel login

# Déployer en production
npm run vercel-deploy
# ou
npx vercel --prod
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact est **déjà configuré** pour envoyer des emails à **siame.romain.scw@gmail.com** ! 🎉

### 🚀 Configuration rapide (3 minutes)

**📖 Guide détaillé :** Consultez [QUICKSTART_CONTACT.md](QUICKSTART_CONTACT.md)

**Résumé :**
1. Créez un mot de passe d'application Gmail : https://myaccount.google.com/apppasswords
2. Ajoutez-le dans le fichier `.env` :
   ```env
   EMAIL_USER=siame.romain.scw@gmail.com
   EMAIL_PASSWORD=votre_mot_de_passe_application
   ```
3. Sur Vercel, ajoutez les mêmes variables dans **Settings → Environment Variables**

### 📧 Ce que vous recevrez

- Email HTML formaté joliment
- Nom et email de l'expéditeur
- Message complet
- Fonction "Répondre" directement configurée

**Note :** Nodemailer est déjà installé et configuré. Plus d'infos dans [CONTACT_SETUP.md](CONTACT_SETUP.md)

## 🎨 Personnalisation

### Modifier le contenu

- **Pages françaises**: `frontend/src/pages/*Fr.vue`
- **Pages anglaises**: `frontend/src/pages/*En.vue`
- **Header/Footer**: `frontend/src/components/`
- **Styles**: `frontend/src/style.css`

### Ajouter des images

1. Créer un dossier `frontend/public/img/`
2. Placer vos images dedans
3. Référencer avec `/img/nom-image.jpg` dans les composants

- `photo-profil.svg` (placeholder photo)
- `git.svg` (icône GitHub)
- `link.svg` (icône LinkedIn)
- `Flutter.svg` (placeholder projet)
- `morpion.svg` (placeholder projet)



### Modifier les couleurs

Éditer `frontend/src/style.css` pour changer la palette de couleurs Bootstrap et les styles personnalisés.

## 📝 Scripts disponibles

Depuis la racine du projet:

```powershell
npm run start:dev      # Lance le serveur de dev frontend
npm run build          # Build le frontend pour production
npm run vercel-build   # Build utilisé par Vercel
npm run vercel-deploy  # Déploie sur Vercel via CLI
```

## 🔧 Technologies utilisées

- **Frontend**: Vue.js 3, Vue Router 4, Vite
- **Styles**: Bootstrap 5, CSS custom
- **Animations**: AOS (Animate On Scroll)
- **Deployment**: Vercel (serverless functions + static hosting)
- **API**: Vercel Serverless Functions (Node.js)

## 📄 License

MIT - Romain SIAME © 2025

---

## Liens utiles

- 🔗 [GitHub](https://github.com/rommick59)
- 💼 [LinkedIn](https://www.linkedin.com/in/romain-siame-a237382ba)
