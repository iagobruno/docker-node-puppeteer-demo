FROM node:lts-alpine

RUN apk update
RUN apk add --no-cache git
RUN apk add --update chromium

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV PORT=3000

ENTRYPOINT ["node", "server.js"]
