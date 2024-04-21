# Builder stage
FROM node:21-alpine3.18 as build

WORKDIR /code

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:21-alpine3.18 as production

WORKDIR /app

COPY --from=build /code/.next ./.next
COPY --from=build /code/public ./public
COPY --from=build /code/package.json ./

RUN yarn install --production --frozen-lockfile

CMD ["yarn", "start"]
