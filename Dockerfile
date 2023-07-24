FROM node:16

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend/src ./

CMD ["npm", "start"]
