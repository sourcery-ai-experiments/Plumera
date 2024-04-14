FROM node:21-alpine3.18

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 5173

CMD ["yarn", "dev"]
