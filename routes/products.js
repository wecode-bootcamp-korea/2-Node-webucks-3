import express from 'express';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const routeProd = express.Router();

const { products } = new PrismaClient();

routeProd.get('/', async (req, res) => {
  const getProd = await products.findMany({
    select: {
      id: true,
      category_id: true,
      korean_name: true,
      english_name: true,
    },
  });

  res.json(getProd);
});

routeProd.post('/', async (req, res) => {
  const { category_id, korean_name, english_name } = req.body;

  const newProduct = await products.create({
    data: {
      category_id,
      korean_name,
      english_name,
    },
  });

  res.json(newProduct);
});

export default routeProd;
