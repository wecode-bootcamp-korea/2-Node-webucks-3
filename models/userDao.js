import { prisma } from "../prisma"
import {hash} from "bcryptjs";

const saltRounds = 10;
const addUser = async (email, password, username, address, phone_number, policy_agreed) => {
  const hashedPassword = await hash(password, saltRounds);
  return await prisma.$queryRaw`
    INSERT INTO
      users (
        email,
        password,
        hashedPassword,
        username,
        address,
        phone_number,
        policy_agreed
    )
    VALUES (
      ${email},
      ${password},
      ${hashedPassword},
      ${username},
      ${address},
      ${phone_number},
      ${policy_agreed}
    )
  `
}

module.exports = { addUser };
