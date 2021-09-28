import express from 'express';

import categoryRouter from './categoryRouter'
import productRouter from './productRouter'

const app = express();

//라우트: HTTP메소드 라우트인 .get('/', 콜백함수) 쓸 수 있음
app.use('/products/category', categoryRouter)
app.use('/products', productRouter)

//이렇게만 하면 router가 객체가 변한 것이 export되나?
export default app;