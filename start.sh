docker stop kacifyfrontend || true
docker rm kacifyfrontend || true
docker stop kacifyapi || true
docker rm kacifyapi || true
docker build -t kacify-frontend ./frontend
docker build -t kacify-api ./api
docker compose up -d