import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

const createSale = async (sale) => {
  const client = await ClientRepository.getClient(sale.client_id);
  const product = await ProductRepository.getProduct(sale.product_id);
  if (!client) throw new Error("Client not found");
  if (!product) throw new Error("Product not found");
  return await SaleRepository.insertSale(sale);
};

const getSales = async () => {
  return await SaleRepository.getSales();
};

const getSale = async (id) => {
  return await SaleRepository.getSale(id);
};

const deleteSale = async (id) => {
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
