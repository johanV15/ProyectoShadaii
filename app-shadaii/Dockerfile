# Utiliza una imagen base de Node.js
FROM node:20.10.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Copia el archivo schema.prisma a la raíz del directorio de trabajo del contenedor
COPY schema.prisma ./

# Ejecuta npx prisma generate para generar los archivos de Prisma
RUN npx prisma generate

# Compila la aplicación de TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación (puede ser sobrescrito por Docker Compose)
CMD ["npm", "run", "start:dev"]