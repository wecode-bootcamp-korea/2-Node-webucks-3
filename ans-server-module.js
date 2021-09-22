//server.js의 역할 : 서버를 여는 것 딱 하나만
//router랑 연결은 되어 있어야 함

import express from 'express';
// import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';


//파일분리 전. route, controller, service, model

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;
// const prisma = new PrismaClient();

const start = 
try 
catch 
finally  어쩌구 <- 이거는 에러처리 아님

// app.get('/', async (req, res) => {
//   await res.send({message : 'Hello HI'});
// });

// app.post('/categories', async (req, res)=> {
//   await prisma.$queryRaw`
//     INSERT INTO categories (name)
//     VALUES ("새로운 커피 카테고리");
//   `;
// })

// app.listen(PORT, () => console.log(`server on ${PORT}`));
