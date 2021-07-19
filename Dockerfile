FROM node:lts-alpine

RUN apk update
RUN apk add --no-cache git
# Find node versions here -> https://pkgs.alpinelinux.org/packages?name=nodejs
# RUN apk add --update nodejs=14.17.1-r0
# RUN apk add --update yarn
RUN apk add --update chromium

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
