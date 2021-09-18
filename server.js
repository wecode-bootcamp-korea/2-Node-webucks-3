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

// 2> 리스트 페이지 GET
app.get("/list_page", async (req, res) => {
  const list = await prisma.$queryRaw`
    SELECT p.id,
    p.korean_name,
    i.image_url
    FROM products AS p
    LEFT JOIN images AS i ON p.id = i.id
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

// 제품 POST
app.post("/detail_page", async (req, res) => {
  await prisma.$queryRaw`
  INSERT INTO products 
  (korean_name, english_name, category_id)
  VALUES ("콜드 브루 오트 라떼", "Cold Brew Oat Latte", 1)
  `;
});

// 3> 제품 상세 정보 GET - id에 따라 가져오기
app.get("/detail_page/:id", async (req, res) => {
  const { id } = req.params;

  const detailProducts = await prisma.$queryRaw`
    SELECT p.id AS product_id, p.korean_name, p.english_name,
    i.image_url,
    n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, 
      (select group_concat(a.name, '')
      FROM products_allergies pa
          , allergies a
          WHERE pa.allergy_id = a.id
          AND pa.product_id = p.id
      ) as allergy_name
    FROM products p
    LEFT JOIN images i ON i.product_id = p.id
    LEFT JOIN nutritions n ON n.product_id = p.id
    WHERE p.id IN (${id})
    ;`;
  res.json(detailProducts);
});

app.post("/users/signup", async (req, res) => {
  try {
    const { password, email } = req.body;
    const createdUser = await prisma.$queryRaw`
    INSERT INTO users 
    (email, password)
    VALUES (${email}, ${password})
    ;`;
    res.send({ message: "회원가입에 성공했습니다" });
  } catch (error) {
    if (error.meta.code == "1062") {
      res.send({
        message: "이미 가입된 이메일입니다. 다른 이메일을 사용해주세요",
      });
    }
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
