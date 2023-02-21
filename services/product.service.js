import ProductRepository from "../repositories/product.repository.js";

const createProduct = async (product) => {
  return await ProductRepository.insertProduct(product);
};

const getProducts = async () => {
  return await ProductRepository.getProducts();
};

const getProduct = async (id) => {
  return await ProductRepository.getProduct(id);
};

const deleteProduct = async (id) => {
  return await ProductRepository.deleteProduct(id);
};

const updateProduct = async (product) => {
  return await ProductRepository.updateProduct(product);
};

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
