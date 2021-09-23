import { prisma } from "../prisma"

const addUser = async (email, password, username, address, phone_number, policy_agreed) => {
  return await prisma.$queryRaw`
    INSERT INTO
      users (
        email,
        password,
        username,
        address,
        phone_number,
        policy_agreed
    )
    VALUES (
      ${email},
      ${password},
      ${username},
      ${address},
      ${phone_number},
      ${policy_agreed}
    )
  `
}

module.exports = { addUser };