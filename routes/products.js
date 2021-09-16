import express from 'express';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const routeProd = express.Router();

const prisma = new PrismaClient();

routeProd.get('/', async (req, res) => {
  const getProd = await prisma.$queryRaw`
  SELECT * FROM products
  `;

  res.json(getProd);
});

routeProd.post('/', async (req, res) => {
  const { category_id, korean_name, english_name } = req.body;

  const newProduct = await prisma.$queryRaw`
  INSERT INTO products (category_id, korean_name, english_name)
  VALUES (${category_id}, ${korean_name}, ${english_name})
  `;

  res.json(newProduct);
});

export default routeProd;
