import express from 'express';
import Prisma from '@prisma/client';
const routeProd = express.Router();

/*
- **routes:** 라우팅(엔드 포인트 나누기) 로직
- **controllers:** 엔드포인트에 해당하는 함수 로직 - Http 요청에 따른
에러 핸들링, service 로직에서 데이터를 받아와서 응답으로 내보내는 로직
*/

// 모델.js 원하는 테이블 이름 전달해서 해당 테이블 정보 다 가져오기 (GET)
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const getDataFromDB = () => {
  return prisma.$queryRaw`SELECT * FROM products`;
};

// 서비스.js

// 컨트롤러.js
const getProducts = async res => {
  const dbdb = await getDataFromDB();
  res.json(dbdb);
};

// 라우팅.js
routeProd.get('/', async (req, res) => {
  await getProducts(res);
});

// ---------------------------------------------------------------

// 모델.js
const postDataToDB = async (req, res) => {
  const { category_id, korean_name, english_name } = req.body;

  const newProduct = await prisma.$queryRaw`
  INSERT INTO products (category_id, korean_name, english_name)
  VALUES (${category_id}, ${korean_name}, ${english_name})`;

  res.json(newProduct);
};

// 서비스.js
const postValidation = async (req, res) => {
  const { korean_name } = req.body;

  const [productExists] = await prisma.$queryRaw`
  SELECT products.korean_name FROM products WHERE products.korean_name = ${korean_name}`;

  if (productExists) {
    return res.status(400).json({
      message: '윤진님 이거 이미 있는 제품이네요',
    });
  }

  postDataToDB(req, res);
};

// 컨트롤러.js - 에러메시지, 유효성 검증, 맞으면 서비스로 전달 (GUARD)
const productController = (req, res) => {
  postValidation(req, res);
};

// 라우팅.js
routeProd.post('/', async (req, res) => {
  await productController(req, res);
});

export default routeProd;

// 상황: 새로운 제품을 테이블에 등록 요청(CREATE)

// 라우팅 O
// 분기해서 해당 모듈 실행

// 컨트롤러 ?
//

// 서비스 ?
//

// 모델 ?
