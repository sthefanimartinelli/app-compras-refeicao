const mongoose = require("mongoose");
const { productSchema } = require("./ProductModel");

const cartSchema = new mongoose.Schema(
    {
        customerEmail: {
            type: String,
            required: true,
            unique: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        products: [productSchema],
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
