import { prisma } from "../prisma"

const addUser = async (email, password, hashedPassword, username, address, phoneNumber, policyAgreed) => {
  return await prisma.$queryRaw`
    INSERT INTO
      users (
        email,
        password,
        hashed_password,
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
      ${phoneNumber},
      ${policyAgreed}
    )
  `
}

const checkUser = async(email) => {
  return await prisma.$queryRaw`
    SELECT
      u.email,
      u.password,
      u.hashed_password,
      u.username
    FROM
      users u
    WHERE u.email = ${email};
  `;
}

module.exports = { addUser, checkUser };
