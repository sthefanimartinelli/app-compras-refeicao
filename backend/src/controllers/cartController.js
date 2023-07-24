const CartModel = require("../models/CartModel");

const createCart = async (req, res) => {
  try {
    const { products, customerName, customerEmail } = req.body;

    const totalPrice = products.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)

    const cart = new CartModel({
      customerEmail,
      customerName,
      products,
      totalPrice,
    });

    await cart.save();
    res.status(201).json({ message: "Carrinho criado com sucesso", cart });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar carrinho" });
  }
}

const updateCart = async (req, res) => {
  try {
    const { products, customerName, customerEmail } = req.body;

    // Primeiro tenta encontrar o carrinho 
    const existingCart = await CartModel.findOne({ customerEmail });
    if (!existingCart) {
      return res.status(404).json({ message: "Carrinho não encontrado" });
    }

    // Caso o carrinho exista, verifica se está vazio e se estiver, apaga o registro do banco:
    if (products.length === 0) {
      await CartModel.deleteOne({ cartId })
    }
    
    // Caso contrário, atualiza o carrinho
    const totalPrice = products.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)
    
    existingCart.products = products;
    existingCart.totalPrice = totalPrice;
    existingCart.customerName = customerName;
    existingCart.customerEmail = customerEmail;

    // Salva o carrinho atualizado
    await existingCart.save();

    res.status(200).json({ message: "Carrinho atualizado com sucesso", cart: existingCart });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar carrinho" });
  }
}

module.exports = { createCart, updateCart };