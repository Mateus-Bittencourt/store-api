import SupplierService from "../services/supplier.service.js";

const createSupplier = async (req, res, next) => {
  try {
    const supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error("Name, CNPJ, Phone, Email and Address are required");
    }
    res.send(await SupplierService.createSupplier(supplier));
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
};

const getSuppliers = async (req, res, next) => {
  try {
    res.send(await SupplierService.getSuppliers());
    logger.info("GET /supplier");
  } catch (error) {
    next(error);
  }
};

const getSupplier = async (req, res, next) => {
  try {
    res.send(await SupplierService.getSupplier(req.params.id));
    logger.info(`GET /supplier/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    await SupplierService.deleteSupplier(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /supplier/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address ||
      !supplier.supplierId
    ) {
      throw new Error("Name, CNPJ, Phone, Email, Address and ID are required");
    }
    res.send(await SupplierService.updateSupplier(supplier));
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
