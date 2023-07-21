const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;

// Conexão com DB
const conn = require("./db/conn");
conn();

app.listen(PORT, function() {
  console.log(`Servidor online na porta ${PORT}!`)
});
