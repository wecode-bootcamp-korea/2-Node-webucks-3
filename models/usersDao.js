import prisma from "../prisma";

const getAllUser = async () => {
  return await prisma.$queryRaw`
    SELECT
      u.email, u.password, u.user_name,
      u.address, u.phone_number, u.policy_agreed
    FROM users u;`;
};

const createUser = async (email, hashedPassword) => {
  return await prisma.$queryRaw`
    INSERT INTO
      users
    (email, password)
      VALUES (${email}, ${hashedPassword});`;
};

const getUserInfo = async (email) => {
  console.log(email);
  return await prisma.$queryRaw`
    SELECT
      u.email, u.password, u.id
    FROM
      users u
    WHERE u.email = ${email}
  ;`;
};

module.exports = { getAllUser, createUser, getUserInfo };
