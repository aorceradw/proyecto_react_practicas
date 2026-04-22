# Portfolio Project

Proyecto fullstack con React 19 + Express.js + MySQL.

## Estructura

Frontend (React SPA):

- src/ - codigo fuente
- public/ - archivos publicos
- Dockerfile - build multi-stage
- package.json

Backend (Express API):

- app/ - servidor y logica
- tests/ - tests
- Dockerfile - node alpine
- database.sql - schema

## Docker

El proyecto usa 3 servicios:

- database: MySQL 8.0 puerto 3306
- backend: Express puerto 5000
- frontend: React + Nginx puertos 80 y 3000

## Uso

```bash
chmod +x start-docker.sh
./start-docker.sh

docker-compose logs -f

docker-compose down
```

## URLs

- Frontend: http://localhost
- Backend: http://localhost:5000
- API: http://localhost:5000/api
- Database: localhost:3306
