import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";
import ProductInfoRepository from "../repositories/productInfo.repository.js";

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
  const product = await ProductRepository.getProduct(id);
  if (!product) throw new Error("Product not found");
  product.info = await ProductInfoRepository.getProductInfo(parseInt(id));
  return product;
};

const deleteProduct = async (id) => {
  const sales = await SaleRepository.getSalesByProductId(id);
  if (sales.length > 0) {
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

const createProductInfo = async (productInfo) => {
  await ProductInfoRepository.createProductInfo(productInfo);
};

const updateProductInfo = async (productInfo) => {
  await ProductInfoRepository.updateProductInfo(productInfo);
};

const createReview = async (review, productId) => {
  await ProductInfoRepository.createReview(review, productId);
};

const deleteReview = async (productId, index) => {
  await ProductInfoRepository.deleteReview(parseInt(productId), parseInt(index));
};

const getProductsInfo = async () => {
  return await ProductInfoRepository.getProductsInfo();
};

const deleteProductInfo = async (productId) => {
  await ProductInfoRepository.deleteProductInfo(parseInt(productId));
};

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo,
};
