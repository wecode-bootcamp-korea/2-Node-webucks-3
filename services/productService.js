import productModel from '../models/productModel';

const getProductList = async () => {
  const category = await productModel.getProductList;
  return category;
};

const getProductDetail = async () => {
  const category = await productModel.getProductDetail;
  return category;
};


export default {getProductList, getProductDetail};