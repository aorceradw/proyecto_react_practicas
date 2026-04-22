# Frontend - Nginx
# Sirve React (SPA) en puerto 80

FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Build de Vite
RUN npm run build

# Stage de producción
FROM nginx:alpine

# Copiar configuración de Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar dist de React
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
