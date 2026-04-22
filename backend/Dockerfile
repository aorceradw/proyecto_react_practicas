# Backend - Node.js + Express
# API REST en puerto 5000

FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 5000

# Iniciar servidor
CMD ["node", "app/server.js"]
