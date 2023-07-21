const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = require("./ProductModel");

const cartSchema = new Schema({
  customerEmail: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  products: [ productSchema ],
  totalPrice: {
    type: Number,
    required: true,
  },
},
{ timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;