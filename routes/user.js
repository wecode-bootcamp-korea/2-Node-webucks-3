import express from 'express';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const route = express.Router();

const prisma = new PrismaClient();

route.get('/', async (req, res) => {
  const route = await prisma.$queryRaw`SELECT * FROM users`;
  res.json(route);
});

route.post('/', async (req, res) => {
  const { email, password, username, address, phone_number, policy_agreed } =
    req.body;

  const newUser = await prisma.$queryRaw`
  INSERT INTO users (email, password, username, address, phone_number, policy_agreed)
  VALUES (${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed})
  `;

  res.json(newUser);
});

export default route;
