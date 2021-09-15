import express from 'express';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const routeCategory = express.Router();

const { categories } = new PrismaClient();

routeCategory.get('/', async (req, res) => {
  const getCategory = await categories.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  res.json(getCategory);
});

routeCategory.post('/', async (req, res) => {
  const { name } = req.body;

  const newCategory = await categories.create({
    data: {
      name,
    },
  });

  res.json(newCategory);
});

export default routeCategory;
