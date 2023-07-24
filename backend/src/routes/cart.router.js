const cartRouter = require("express").Router();

const cartController = require("../controllers/cartController");

cartRouter.post("/", cartController.createCart);

cartRouter.put("/:cartId", cartController.updateCart);

module.exports = cartRouter;
