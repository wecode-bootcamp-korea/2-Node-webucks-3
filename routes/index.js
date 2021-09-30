import express from 'express';
import prisma from '../prisma'

import categoryRouter from './categoryRouter'
// import productRouter from './productRouter'
import userRouter from './userRouter'

const app = express();

//라우트: HTTP메소드 라우트인 .get('/', 콜백함수) 쓸 수 있음
app.use('/products/category', categoryRouter)
// app.use('/products', productRouter)
app.post("/products/nutritions", async (req, res) => {
  console.log(req.body)
  let { product_id, kcal, fat, protein, sodium, sugars, caffeine } = req.body;
  console.log(kcal);
  await prisma.$queryRaw`
  INSERT INTO nutritions 
  (product_id, kcal, fat, protein, sodium, sugars, caffeine)
  VALUES 
  (${product_id}, ${kcal}, ${fat}, ${protein}, ${sodium}, ${sugars}, ${caffeine});`;

  res.status(201).json({message:'uploaded'});
});

app.use('/user', userRouter)

//이렇게만 하면 router가 객체가 변한 것이 export되나?
export default app;