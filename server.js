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
app.use(express.json()); 

app.use(router);
app.get("/", (req, res) => res.send("Server is start"));


const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server on ${PORT}`));
  } catch (err) {
    console.error(err); //이후 코드들에서(=try블럭 안에 있는 부분)에러났을 때 vscode터미널에 에러 쫘라락 뜨는 거는 이것때문. //이거안써주면 원래 노드는 아무말도안함. 
  } finally {
    await prisma.$disconnect;
  }
};

start();