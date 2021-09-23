import { productDao } from "../models";

const getAllProducts = async () => {
  const products =  await productDao.getAllProducts();
  return products;
}

const getSomeProduct = async (id) => {
  const product = await productDao.getSomeProduct(id);
  return product;
}

module.exports = { getAllProducts, getSomeProduct };
