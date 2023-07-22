const express = require("express");
const cartRouter = require("./routes/cart.router");
const productRouter = require("./routes/product.router");

const app = express();
app.use(express.json());

const PORT = 3000;

// Conexão com DB
const conn = require("./db/conn");
conn();

// Configuração das rotas
app.use('/cart', cartRouter);
app.use('/products', productRouter);

app.listen(PORT, function() {
  console.log(`Servidor online na porta ${PORT}!`)
});
