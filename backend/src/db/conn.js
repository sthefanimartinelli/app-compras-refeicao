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

async function main() {
  try {
    await mongoose.connect("mongodb://root:example@enafood_db:27017/database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;