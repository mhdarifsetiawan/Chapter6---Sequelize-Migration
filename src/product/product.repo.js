const { Product } = require("../database/models");

// cari semua product
const getAllProducts = async (q) => {
  return await Product.findAll({ where: { product_name: q } });
};

// bikin product baru
const createNewProduct = async (
  product_name,
  description,
  stock,
  available
) => {
  return await Product.create({
    product_name: username,
    description: password,
    stock: stock,
    available: available,
  });
};

// cari product berdasar usernamenya
const getProductByProductname = async (product_name) => {
  return await Product.findOne({
    where: { product_name: username },
  });
};

// delete product dari database
const deleteProduct = async (productId) => {
  return await Product.destroy({
    where: { id: productId },
  });
};

const productRepo = {
  getAllProducts,
  createNewProduct,
  getProductByProductname,
  deleteProduct,
};

module.exports = productRepo;
