import productModel from '../models/productModel';

const getProductList = async () => {
  const category = await productModel.getProductList;
  return category;
};

const getProductDetail = async (productId) => {
  console.log('<<<<<<<<')
  console.log(typeof productId)
  const category = await productModel.getProductDetail(productId); //()없었는데..
  return category;
};


export default {getProductList, getProductDetail};