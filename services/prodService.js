import {
  getDataFromDB,
  getDatasFromDB,
  addProductQuery,
} from '../models/prodDao.js';

export const getProductFromDB = async id => {
  try {
    const products = await getDataFromDB(id);
    if (!products.length) {
      throw new Error("Sorry! There's no data");
    }
    return products;
  } catch (err) {
    throw err;
  }
};

export const getProductsFromDB = async (req, res) => {
  try {
    const products = await getDatasFromDB();
    if (!products.length) {
      throw new Error("Sorry! There's no data");
    }
    return products;
  } catch (err) {
    throw err;
  }
};

export const createProductsToDB = async data => {
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
    const result = await addProductQuery(data);
    return result;
  } catch (err) {
    throw err;
  }
};
