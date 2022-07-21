const productService = require("./product.service");

const getAllProducts = async (req, res) => {
  const { q } = req.query;
  const products = await productService.getAllProducts(q);
  res.json(products);
};

const productController = {
  getAllProducts,
};

module.exports = productController;
