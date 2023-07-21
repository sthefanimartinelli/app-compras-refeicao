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

const MONGO_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

async function main() {
  try {
    // await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@enafood_db:27017/database`, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect("mongodb://enafood_db:27017/database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;