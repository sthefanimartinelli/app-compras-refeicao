const productRouter = require("express").Router();

const productController = require("../controllers/productController");

productRouter.get("/", productController.getAllProducts);

productRouter.post("/", productController.createProduct);

module.exports = productRouter;
