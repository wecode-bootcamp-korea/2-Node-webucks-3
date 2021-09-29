import { prodDao } from '../models';

export const getProduct = async id => {
  try {
    const products = await prodDao.getProduct(id);
    if (!products.length) {
      throw new Error("Sorry! There's no data");
    }
    return products;
  } catch (err) {
    throw err;
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await prodDao.getProducts();
    if (!products.length) {
      throw new Error("Sorry! There's no data");
    }
    return products;
  } catch (err) {
    throw err;
  }
};

export const createProducts = async data => {
  try {
    data.forEach(product => {
      if (
        !product.category_id ||
        !product.korean_name ||
        !product.english_name
      ) {
        throw new Error('필수 입력 요소가 빠졌습니다');
      }
    });
    const result = await prodDao.createProducts(data);
    return result;
  } catch (err) {
    throw err;
  }
};
