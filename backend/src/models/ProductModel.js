const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
  notes: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = productSchema;
