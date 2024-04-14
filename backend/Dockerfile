# Utilisation de l'image Node.js
FROM node:21-alpine3.18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json yarn.lock ./

# Installer les dépendances
RUN yarn install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par AdonisJS
EXPOSE 3333

# Commande pour lancer l'application en mode développement
CMD ["yarn", "dev"]
