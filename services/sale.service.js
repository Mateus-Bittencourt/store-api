import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

const createSale = async (sale) => {
  const client = await ClientRepository.getClient(sale.client_id);
  const product = await ProductRepository.getProduct(sale.product_id);
  if (!client) throw new Error("Client not found");
  if (!product) throw new Error("Product not found");

  if (product.stock > 0) {
    sale = await SaleRepository.insertSale(sale);
    product.stock--;
    await ProductRepository.updateProduct(product);
    return sale;
  } else throw new Error("Product out of stock");
};

const getSales = async (productId) => {
  if (productId) return await SaleRepository.getSalesByProductId(productId);
  return await SaleRepository.getSales();
};

const getSale = async (id) => {
  return await SaleRepository.getSale(id);
};

const deleteSale = async (id) => {
  const sale = await SaleRepository.getSale(id);
  if (!sale) throw new Error("Sale not found");

  const product = await ProductRepository.getProduct(sale.product_id);
  product.stock++;
  await ProductRepository.updateProduct(product);

  return await SaleRepository.deleteSale(id);
};

const updateSale = async (sale) => {
  const client = await ClientRepository.getClient(sale.client_id);
  const product = await ProductRepository.getProduct(sale.product_id);
  if (!client) throw new Error("Client not found");
  if (!product) throw new Error("Product not found");
  return await SaleRepository.updateSale(sale);
};

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
