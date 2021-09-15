import express from 'express';
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const route = express.Router();

const { users } = new PrismaClient();

route.get('/', async (req, res) => {
  const route = await users.findMany({
    select: {
      id: true,
      email: true,
      password: true,
      username: true,
      address: true,
      phone_number: true,
      policy_agreed: true,
    },
  });

  res.json(route);
});

route.post('/', async (req, res) => {
  const { email, password, username, address, phone_number, policy_agreed } =
    req.body;

  const newUser = await users.create({
    data: {
      email,
      password,
      username,
      address,
      phone_number,
      policy_agreed,
    },
  });

  res.json(newUser);
});

export default route;
