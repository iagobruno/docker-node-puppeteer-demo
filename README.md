## TODO

- [x] Run server.js inside nodejs container.
- [x] Install Chromium inside the container.
- [x] Use puppeteer with installed chromium version.
- [x] Run `yarn run test` using Github actions with docker-compose.
- [x] Cache dockerfile layers for faster builds.

## Getting Started

```bash
> docker-compose up -d --build
> docker exec -i server-container yarn run test
```
