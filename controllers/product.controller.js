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

const createProductInfo = async (req, res, next) => {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) throw new Error("Info are required");

    await ProductService.createProductInfo(productInfo);
    res.status(201).end();
    logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
  } catch (error) {
    next(error);
  }
};

const updateProductInfo = async (req, res, next) => {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) throw new Error("Info are required");

    await ProductService.updateProductInfo(productInfo);
    res.status(204).end();
    logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
  } catch (error) {
    next(error);
  }
};

const createReview = async (req, res, next) => {
  try {
    let params = req.body;

    if (!params.productId || !params.review)
      throw new Error("Product ID and Review are required");
    await ProductService.createReview(params.review, params.productId);
    res.status(201).end();
    logger.info(`POST /product/review - ${JSON.stringify(review)}`);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    await ProductService.deleteReview(req.params.id, req.params.index);
    logger.info(`DELETE /product/${req.params.id}/review/${req.params.index}`);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getProductsInfo = async (req, res, next) => {
  try {
    res.send(await ProductService.getProductsInfo());
    logger.info("GET /product/info");
  } catch (error) {
    next(error);
  }
};

const deleteProductInfo = async (req, res, next) => {
  try {
    await ProductService.deleteProductInfo(req.params.id);
    res.status(204).end();
    logger.info(`DELETE /product/info/${req.params.id}`);
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
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo,
};
