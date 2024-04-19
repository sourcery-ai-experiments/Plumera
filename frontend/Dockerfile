FROM node:21-alpine3.18

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

# Exposer le port 3000 (redundant, you can remove this line)
EXPOSE 3000

# Lancer l'application en mode développement
CMD ["yarn", "dev"]
