const { Product: ProductModel } = require("../models/ProductModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
}

const createProduct = async (req, res) => {
  try {
    const { price, quantity } = req.body;

    const product = new ProductModel({
      price,
      quantity,
    });

    await product.save();
    res.status(201).json({ message: "Produto criado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar produto" });
  }
}

module.exports = { createProduct, getAllProducts }