# Node + Vue + Prisma starter

Ce dossier contient un exemple minimal pour démarrer un projet fullstack avec :
- Backend: Node.js + Express + Prisma (SQLite)
- Frontend: Vue 3 + Vite

Instructions rapides:

1. Backend

```powershell
cd node-vue-prisma/backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

2. Frontend

```powershell
cd node-vue-prisma/frontend
npm install
npm run dev
```

Le backend écoute par défaut sur le port `4000` et le frontend sur `5173`.

N'hésitez pas à personnaliser la `schema.prisma` et la configuration.
