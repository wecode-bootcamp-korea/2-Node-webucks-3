import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

dotenv.config();
const app = express();
const { PORT } = process.env;

// 카테고리 페이지 POST
app.post("/categories_page", async (req, res) => {
  await prisma.$queryRaw`
  INSERT INTO categories (id, name) VALUES (10, "스타벅스 논커피")
  `;
});

// 1> 카테고리 GET
app.get("/categories_page", async (req, res) => {
  const category = await prisma.$queryRaw`
  SELECT c.id, c.name
  FROM categories c;`;
  res.json(category);
});

// 제품 POST
app.post("/products", async (req, res) => {
  await prisma.$queryRaw`
  INSERT INTO products 
  (korean_name, english_name, category_id)
  VALUES ("콜드 브루 오트 라떼", "Cold Brew Oat Latte", 1)
  `;
});

// 제품 GET - id에 따라 가져오기
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const [product] = await prisma.$queryRaw`
  SELECT p.id, p.korean_name, p.english_name
  FROM products p
  WHERE p.id=${id}
  ;`;
  res.json(product);
});

// 2> 리스트 페이지 GET
app.get("/list_page", async (req, res) => {
  const list = await prisma.$queryRaw`
  SELECT c.id, c.name, p.korean_name, p.english_name, p.category_id, p.id
  FROM categories c
  JOIN products p
  ON p.category_id = c.id
  ;`;
  res.json(list);
});

// 영양 테이플 POST
app.post("/nutritions", async (req, res) => {
  const nutrition = await prisma.$queryRaw`
  INSERT INTO nutritions 
  (product_id, calory, fat, protein, sodium, sugar, caffeine)
  VALUES (1, 25, 0, 0, 50, 0, 680),
  (2, 420, 6, 53, 140, 53, 210),
  (3, 75, 2, 1, 20, 10, 245),
  (4, 5, 0, 0, 5, 0, 245),
  (5, 265, 9, 8, 115, 29, 150),
  (6, 125, 6, 3, 58, 11, 150),
  (7, 150, 6, 2, 15, 17, 160),
  (8, 345, 8, 10, 115, 44, 105),
  (9, 5, 0, 0, 11, 0, 159),
  (10, 510, 20, 10, 147.8, 40, 150),
  (11, 105, 3, 1, 95, 11, 65);`;
});

// 영양 테이블 GET
app.get("/nutritions", async (req, res) => {
  const nutrition = await prisma.$queryRaw`
  SELECT n.product_id, n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine
  FROM nutritions n;`;
  res.json(nutrition);
});

// 알러지 테이블 GET
app.get("/allergies", async (req, res) => {
  const allergy = await prisma.$queryRaw`
  SELECT a.id, a.name 
  FROM allergies a;
  `;
  res.json(allergy);
});

// 이미지 테이블 GET
app.get("/images", async (req, res) => {
  const image = await prisma.$queryRaw`
  SELECT i.image_url, i.product_id
  FROM images i;`;
  res.json(image);
});

// 3> 디테일 페이지
app.get("/detail_page", async (req, res) => {
  const detail = await prisma.$queryRaw`
  SELECT p.korean_name, p.english_name, p.category_id, p.id, n.product_id, n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, i.image_url, i.product_id
  FROM products p
  JOIN images i
  ON i.product_id = p.id
  JOIN nutritions n
  ON n.product_id = p.id
  ;`;
  res.json(detail);
});

// app.use(express.json());

app.post("/users/signup", async (req, res) => {
  const createUser = await prisma.$queryRaw`
    INSERT INTO users (email, password, user_name, address, phone_number, policy_agreed) 
    VALUES ('minjae2246@gmail.com', 'minjae', '김민재', '서울 동대문구 회기동', '01022462294', true),
    ('const.wonkook@gmail.com', 'wonkook', '이원국', '서울 종각 위워크', '01098055494', true),
    ('1mlmf2mpmf3@gmail.com', 'yoonjin', '김윤진', '서울 강남구 위워크', '01026990244', true),
    ('jhyunk218@gmail.com', 'jihuyn', '김지현', '서울 중랑구 위워크', '01077096203', true),
    ('jaewon.walks@gmail.com', 'jaewon', '김재원', '서울 마포구 위워크', '01064361413', true)    
    ;`;
  res.json(createUser);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: "something wrong!",
  });
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
