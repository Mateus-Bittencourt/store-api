import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

const createProduct = async (product) => {
  if (await SupplierRepository.getSupplier(product.supplier_id)) {
    return await ProductRepository.insertProduct(product);
  }
  throw new Error("Supplier not found");
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
  if (await SupplierRepository.getSupplier(product.supplier_id)) {
    return await ProductRepository.updateProduct(product);
  }
  throw new Error("Supplier not found");
};

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
