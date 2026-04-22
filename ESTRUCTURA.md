# Estructura del Proyecto

## Raiz

proyecto_react_practicas/

- .env
- .env.example
- .gitignore
- .dockerignore
- docker-compose.yml
- README.md
- start-docker.sh
- scripts/
- frontend/
- backend/

## Frontend

frontend/

- nginx/
  - default.conf (config Nginx)
- src/ (codigo React)
  - components/ (13 componentes)
  - pages/
  - assets/
- public/
- Dockerfile (multi-stage build)
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- index.html

## Backend

backend/

- app/ (codigo principal)
  - server.js
  - config/
  - controllers/
  - middleware/
  - models/
  - routes/
  - services/
- tests/
- Dockerfile (Node Alpine)
- package.json
- database.sql

## Docker

3 servicios:

- db (MySQL 8.0): puerto 3306
- backend (Express): puerto 5000
- frontend (React + Nginx): puertos 80 y 3000

Red interna: portfolio_network
Volumen: db_data (persistencia MySQL)

## URLs

Frontend: http://localhost
Backend: http://localhost:5000
API: http://localhost:5000/api
Database: localhost:3306
