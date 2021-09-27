import express from 'express';

import categoryRouter from './categoryRouter'

const router = express.Router();

//미들웨어: .use() 쓸 수 있음
//라우트: HTTP메소드 라우트인 .get('/', 콜백함수) 쓸 수 있음

//use로, 미들웨어 설정해주면, 더 직관적으로 라우팅 관리가능
router.use('/products/category', categoryRouter)

export default router;