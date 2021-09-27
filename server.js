//server.js의 역할 : 서버를 여는 것 딱 하나만
//router랑 연결은 되어 있어야 함

import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import prisma from './prisma'
//파일분리 전. route, controller, service, model

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

// // to solve req.body == undefined
// // 미들웨어
// app.use(express.json()); 

// app.use('/', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server on ${PORT}`));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect;
  }
};

start();