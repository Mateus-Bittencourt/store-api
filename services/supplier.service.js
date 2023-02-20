import SupplierRepository from "../repositories/supplier.repository.js";

const createSupplier = async (supplier) => {
  return await SupplierRepository.insertSupplier(supplier);
};

const getSuppliers = async () => {
  return await SupplierRepository.getSuppliers();
};

const getSupplier = async (id) => {
  return await SupplierRepository.getSupplier(id);
};

const deleteSupplier = async (id) => {
  return await SupplierRepository.deleteSupplier(id);
};

const updateSupplier = async (supplier) => {
  return await SupplierRepository.updateSupplier(supplier);
};

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
