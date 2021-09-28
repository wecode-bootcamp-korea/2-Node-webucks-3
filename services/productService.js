import { productDao } from "../models";

const getAllProducts = async () => {
  const products =  await productDao.getAllProducts();
  return products;
}

const getProduct = async (id) => {
  const product = await productDao.getProduct(id);
  return product;
}

module.exports = { getAllProducts, getProduct };
