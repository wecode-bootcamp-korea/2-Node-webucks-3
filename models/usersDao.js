import prisma from "../prisma";

const getAllUser = async () => {
  return await prisma.$queryRaw`
  SELECT u.email, u.password, u.user_name, u.address, u.phone_number, u.policy_agreed
  FROM users u;`;
};

const createUser = async (req, res) => {
  const { password, email } = req.body;
  return await prisma.$queryRaw`
  INSERT INTO users 
  (email, password)
  VALUES (${email}, ${password})
  ;`;
};

module.exports = { getAllUser, createUser };
