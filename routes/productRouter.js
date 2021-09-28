import express from 'express';
import productController from '../controllers/productController'

const productRouter = express.Router();

// 🍀 products엔드포인트에서, get메소드로 요청할 때(제품 리스트 API)
//4.router(엔드포인트 분기) ...express.Router() 안쓰고 express()로 쓴 상태
productRouter.get('/',productController.getProductList);

// 🍀 products/2엔드포인트에서, get메소드로 요청할 때(제품 상세 API)
productRouter.get('/2', productController.getProductDetail);

export default productRouter;