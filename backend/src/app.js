const express = require("express");
const cartRouter = require("./routes/cart.router");
const productRouter = require("./routes/product.router");
const conn = require("./db/conn");

const PORT = 3000;

const app = express();
app.use(express.json());

// Conexão com DB
conn();

// Configuração das rotas
app.use('/cart', cartRouter);
app.use('/products', productRouter);

app.listen(PORT, function() {
  console.log(`Servidor online na porta ${PORT}!`)
});
