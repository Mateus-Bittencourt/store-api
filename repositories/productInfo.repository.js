import { getClient } from "./mongo.db.js";

const createProductInfo = async (productInfo) => {
  const client = getClient();
  try {
    await client.connect();
    await client.db("store").collection("productInfo").insertOne(productInfo);
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};

const updateProductInfo = async (productInfo) => {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("store")
      .collection("productInfo")
      .updateOne(
        { productId: productInfo.productId },
        { $set: { ...productInfo } }
      );
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};

const getProductInfo = async (productId) => {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("store")
      .collection("productInfo")
      .findOne({ productId });
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};

const createReview = async (review, productId) => {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.push(review);
    await updateProductInfo(productInfo);
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (productId, index) => {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.splice(index, 1);
    await updateProductInfo(productInfo);
  } catch (error) {
    throw error;
  }
};

const getProductsInfo = async () => {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("store")
      .collection("productInfo")
      .find({})
      .toArray();
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};


const deleteProductInfo = async (productId) => {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("store")
      .collection("productInfo")
      .deleteOne({ productId });
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};

export default {
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo,
};
