FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src
COPY .gitignore ./

# CMD ["node", "src/app.js"]

CMD nodemon -L --watch . src/app.js
