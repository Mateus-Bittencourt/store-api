import Product from "../models/product.model.js";

const insertProduct = async (product) => {
  try {
    return await Product.create(product);
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    return await Product.findAll();
  } catch (error) {
    throw error;
  }
};

const getProduct = async (id) => {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (product) => {
  try {
    await Product.update(product, {
      where: {
        product_id: product.productId,
      },
    });
    return await getProduct(product.productId);
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await Product.destroy({
      where: {
        product_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default {
  insertProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
