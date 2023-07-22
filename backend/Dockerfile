FROM node:16

WORKDIR /app

# Copia o package.json e o package-lock.json
COPY backend/package*.json ./

# Instala os pacotes
RUN npm install

# Copia o conteudo de src pra /app
COPY backend/src ./

CMD ["npm", "start"]
