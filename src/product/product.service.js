const productRepo = require("./product.repo");

const getAllProducts = async (q) => {
  // logika bisnis
  return await productRepo.getAllProducts(q);
};

const createNewProduct = async (
  product_name,
  description,
  stock,
  available
) => {
  const productExist = await productRepo.getProductByName(product_name);
  if (!productExist) {
    return await productRepo.createNewProduct(
      product_name,
      description,
      stock,
      available
    );
  } else {
    return "Product is already exist";
  }
};

const deleteProduct = async (productId) => {
  if (productId != 1) {
    return await userRepo.deleteProduct(productId);
  } else {
    return "Delete is restricted for this product";
  }
};

const productService = {
  getAllProducts,
  createNewProduct,
  deleteProduct,
};

module.exports = productService;
