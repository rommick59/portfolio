Backend Node + Prisma

- `npm install` pour installer les dépendances
- `npx prisma generate` pour générer le client Prisma
- `npx prisma migrate dev --name init` pour créer la base SQLite et appliquer la migration
- `npm run dev` pour démarrer le serveur en mode développement (nodemon)

L'API expose:
- `GET /` : check
- `GET /users` : liste des users
- `POST /users` : crée un user { email, name }
