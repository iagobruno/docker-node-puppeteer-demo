```bash
docker build -t docker-node-puppeteer .

docker run -d -p 3000:3000 docker-node-puppeteer

docker exec -it <container_id> node server.spec.js
```
