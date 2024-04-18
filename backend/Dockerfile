FROM node:20.11.1 AS builder

RUN npm install -g --force yarn

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3333

WORKDIR /app/build

RUN yarn install

CMD ["node", "bin/server.js"]
