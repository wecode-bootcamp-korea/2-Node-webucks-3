import productService from '../services/productService'

const getProductList = async (req, res) => {
    const productList = await productService.getProductList(); //디비에서 받아온 데이터 //함수실행시켜야함 ();으로
    res.json(productList);
}


const getProductDetail = async (req, res) => {
  const productId = Number(req.params.productId);
  const productDetail = await productService.getProductDetail(productId);
  res.status(200).json(productDetail);
}

export default {getProductList, getProductDetail};