FROM node:16

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY src src
COPY .gitignore .

CMD ["node", "src/app.js"]
