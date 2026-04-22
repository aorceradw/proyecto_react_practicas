#!/bin/bash

# Script para inicializar el proyecto con Docker

echo "Iniciando proyecto con Docker..."

# Verificar que Docker esta instalado
if ! command -v docker &> /dev/null; then
    echo "Error: Docker no esta instalado"
    exit 1
fi

# Verificar que Docker Compose esta instalado
if ! command -v docker-compose &> /dev/null; then
    echo "Error: Docker Compose no esta instalado"
    exit 1
fi

# Crear .env si no existe
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Archivo .env creado"
fi
git pull 
# Construir imagenes
echo "Construyendo imagenes..."
docker-compose build

# Iniciar servicios
echo "Iniciando servicios..."
docker-compose up -d

echo ""
echo "Proyecto iniciado"
echo ""
echo "Frontend:  http://localhost"
echo "Backend:   http://localhost:5000"
echo "API:       http://localhost:5000/api"
echo "Database:  localhost:3306"
echo ""
echo "Ver logs:  docker-compose logs -f"
echo "Detener:   docker-compose down"
