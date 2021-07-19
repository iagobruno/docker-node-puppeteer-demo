```bash
docker build -t docker-node-puppeteer .

docker run -d -p 3000:3000 --name test-container docker-node-puppeteer

docker exec -it test-container node server.spec.js
```
