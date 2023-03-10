import ProductService from "../services/product.service.js";

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Name, Description, Value, Stock and Supplier ID are required"
      );
    }
    res.send(await ProductService.createProduct(product));
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    res.send(await ProductService.getProducts());
    logger.info("GET /product");
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    res.send(await ProductService.getProduct(req.params.id));
    logger.info(`GET /product/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /product/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId ||
      !product.productId
    ) {
      throw new Error(
        "Name, Description, Value, Stock, Supplier ID and Product ID are required"
      );
    }
    res.send(await ProductService.updateProduct(product));
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
