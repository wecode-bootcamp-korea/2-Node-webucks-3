//server.js의 역할 : 서버를 여는 것 딱 하나만
//router랑 연결은 되어 있어야 함

import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//파일분리 전. route, controller, service, model

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

//Mis 1 Category, ProductLists, Details API

//왜 여기선 async안해줌?
app.get('/products/categories', (req, res) => {
  res.json({
    "data" : [{
      "id" : 1,
      "name" : "콜드 브루 커피"
    }, {
      "id" : 2,
      "name" : "브루드 커피",
    }, {
      "id" : 3,
      "name" : "에스프레소",
    }, {
      "id" : 4,
      "name" : "프라푸치노",
    }, {
      "id" : 5,
      "name" : "블렌디드"
    }]
  });
});

app.get('/products', async (req, res) => {
  await res.json({
    "data" : [{
      "id" : 1,
      "koreanName" : "나이트로 바닐라크림",
      "englishName" : "Nitro Vanilla Cream",
      "category" : "콜드 브루 커피",
      "categoryId" : 1,
      "imageUrl": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
    }, {
      "id" : 2,
      "koreanName" : "아이스 카페 아메리카노",
      "englishName" : "Ice Cafe Americano",
      "category" : "에스프레소",
      "categoryId" : 3,
      "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
    }, {
      "id" : 3,
      "koreanName" : "돌체 콜드 브루",
      "englishName" : "Dolce Cold Brew",
      "category" : "콜드 브루 커피",
      "categoryId" : 1,
      "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
    }, {
      "id" : 4,
      "koreanName" : "콜드 브루 몰트",
      "englishName" : "Cold Brew Malt",
      "category" : "콜드 브루 커피",
      "categoryId" : 1,
      "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
    }, {
      "id" : 5,
      "koreanName" : "에스프레소 콘 파나",
      "englishName" : "Espresso Con Panna",
      "category" : "에스프레소",
      "categoryId" : 3,
      "imageUrl" : "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg"
    }]
  });
});

app.get('/products/2', async (req, res) => {
  await res.json({
    "data" : {
      "id" : 2,
      "koreanName" : "아이스 카페 아메리카노",
      "englishName" : "Iced Caffe Americano",
      "description" : "진한 에스프레소에 시원한 정수물과 얼음을 더햐여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
      "imageURL" : "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
      "allergens" : [],
      "nutritionInfo" : {
        "calories" : "15",
        "fat" : "0g",
        "sodium" : "15mg",
        "protein" : "1g",
        "caffeine" : "225mg"
      }
    }
  });
});

// app.post('/categories', async (req, res)=> {
//   const categories = await prisma.$queryRaw`
//     INSERT INTO categories (name)
//     VALUES ("콜드 브루 커피");
//   `;

//   res.json(categories);
// })

app.post('/users', async (req, res) => {
  //구조분해할당
  let { email, address, password, phone_number, policy_agreed, username } = req.body;
  // console.log(req);
  // console.log(email);//undefined
  const users = await prisma.$queryRaw`
    INSERT INTO
      users (
        email, 
        address, 
        password, 
        phone_number, 
        policy_agreed, 
        username
      )
    VALUES (
      "1mlmf2mpmf3@gmail.com",
      "seoul",
      "pwd123!", 
      "1", 
      "jin0oon"
    );
  `;
    //post잘되었는지 확인받는 response (프론트를 위해) //반환이 먼저 되면 안되니까 위엔 await
    //아래를 안써주면 뱅글뱅글 돌기만 하고, 기다리기만 함. 종료가 안됨.
    //ORM일 때!
    //res.json(users);

    const [users] = await prisma.$queryRaw`
    SELECT *
    FROM users
    ORDER BY id DESC
    LIMIT 1
    `
});

app.listen(PORT, () => console.log(`server on ${PORT}`));