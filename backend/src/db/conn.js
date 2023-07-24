const mongoose = require("mongoose");
require('dotenv').config();

// Para conexão com o Atlas, utilizar o código abaixo:
// const password = process.env.ATLAS_PASSWORD;

// async function main() {
//   try {
//     mongoose.set("strictQuery", true);
//     await mongoose.connect(
//       `mongodb+srv://sthefanimartinelli:${password}@cluster0.2gubwlk.mongodb.net/?retryWrites=true&w=majority`
//     );
//     console.log("Conectado ao banco!");
//   } catch (error) {
//     console.log(`Erro: ${error}`);
//   }
// }

const MONGO_USER = process.env.DB_USER;
const MONGO_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

async function main() {
    const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;