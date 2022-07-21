const express = require("express");
const productController = require("./product.controller");
const productService = require("./product.service");
const productRouter = express.Router();

// API to get all products
productRouter.get("/products", productController.getAllProducts);

// API to create new product
productRouter.post("/products", async (req, res) => {
  const { product_name, description, stock, available } = req.body;
  const newProduct = await productService.createNewProduct(
    product_name,
    description,
    stock,
    available
  );
  res.json(newProduct);
});

// API to delete products
productRouter.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await productService.deleteProduct(id);
  res.json(deleteProduct);
});

module.exports = productRouter;
