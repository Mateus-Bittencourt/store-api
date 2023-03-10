import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

const createProduct = async (product) => {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
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
  if (await SaleRepository.getSalesByProductId(id)) {
    throw new Error("Product has sales");
  }
  return await ProductRepository.deleteProduct(id);
};

const updateProduct = async (product) => {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
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
