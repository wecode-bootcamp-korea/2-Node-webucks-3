//server.js의 역할 : 서버를 여는 것 딱 하나만
//router랑 연결은 되어 있어야 함

import express from 'express';
import dotenv from 'dotenv';
import prisma from './prisma'

//파일분리 전. route, controller, service, model

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

// to solve req.body == undefined
app.use(express.json()); 

// 🍀 categories엔드포인트에서, get메소드로 요청할 때
//4.router(엔드포인트 분기) ...express.Router() 안쓰고 express()로 쓴 상태
app.get('/products/categories', async (req, res) => {
  //1.model //DB와의 통신은 오래 걸리니, async 비동기로 처리해, getCategory(?)함수 실행 이후 다른 코드가 있을 경우 동시작업 가능케 하기. 이 예제엔 그런 다른 코드 없는듯. //❓그런데 라우터단에서 함수가져올때도 비동기를 꼭 써줘야 하나? 통신도아닌데
  getCategory = async () => {
    const category = await prisma.$queryRaw`
    SELECT * from categories;
    `
    return category; //get 메소드 : DB에서 SELECT한 걸 response에 담아줄 거니까, return값으로!
  }

  //3.controller
  const category = await getCategory(); //model의 함수를 호출 (이 함수는 요청이 지시하는 사항인, DB접근하는 내용을 담고 있기 때문에, 꼭 기다려준 후 response보내야 하니 await)
  res.json(category); //model의 함수가 return해준 데이터를, json형식으로 강제하여 response보내줌
});

// 🍀 products엔드포인트에서, get메소드로 요청할 때(제품 리스트 API)
//4.router(엔드포인트 분기) ...express.Router() 안쓰고 express()로 쓴 상태
app.get('/products', async (req, res) => {
  //1. model
  //복수의 표를 참조해야 하는 상황 (list : product + category + image)
  getProductList = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from categories;
    `; //위의 categories엔드포인트에서 get메소드로 요청할 때와 같은 내용이지만, getProduct함수에 다른 내용이 들어갈 것이 없으니 이렇게 표현 가능
  }

  //3. controller
  const productList = getProductList(); //디비에서 받아온 데이터 //함수실행시켜야함 ();으로
  res.json(productList);
});

// 🍀 products/2엔드포인트에서, get메소드로 요청할 때(제품 상세 API)
app.get('/products/2', async (req, res) => {
  getProductDetail = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from nutritions
    SELECT * from product_allergies
    SELECT * from allergies;
    `;
  }
  const productDetail = getProductDetail();
  res.json(productDetail);
});


// 누가 http로 카테고리 추가하려 하진 않겠지만 post 복습용 코드
// 헷갈림
app.post('/categories', async (req, res)=> {
  let category = req.body.category;
  const categories = await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES (${category});
  `;

  const showCategories = await prisma.$queryRaw`
  SELECT *
  FROM categories
  ORDER BY id DESC
  LIMIT 1
  `
  res.status(201).json(categories);
  console.log(res.json(showCategories));
})

// 🍀 users엔드포인트에서, post메소드로 요청할 때(회원가입페이지)
// 헷갈림
app.post('/users', async (req, res) => {
  //실습하다가 오류나는 거 보기 위해서 쓴 try catch문
  try {
    //구조분해할당
    let { email, address, password, phone_number, policy_agreed, username } = req.body;
    //함수 선언할 때, 안에 리턴하는 거 없이 콘솔만 찍어도 무방하긴 했던 것처럼
    await prisma.$queryRaw`
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
      ${email}, 
      ${address}, 
      ${password}, 
      ${phone_number}, 
      ${policy_agreed}, 
      ${username}
    );
    `;
    //post잘되었는지 확인받는 response (프론트를 위해) //반환이 먼저 되면 안되니까 위엔 await
    //아래를 안써주면 뱅글뱅글 돌기만 하고, 기다리기만 함. 종료가 안됨. 왜그런진 일단 이해 안됨
    const users = await prisma.$queryRaw`
      SELECT *
      FROM users
      ORDER BY id DESC
      LIMIT 1
    `;
    res.status(201).json(users);

  } catch (err) {
    console.log('@@@@@@@@@@@@@@@@@@');
    console.log(req.body.email);
    console.log(req.body.policy_agreed);
    console.log(req.params);
    console.log(res.statusCode);
    console.log('@@@@@@@@@@@@@@@@@@');
    console.log(err);
  }

});

app.listen(PORT, () => console.log(`server on ${PORT}`));