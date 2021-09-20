import prisma from "../prisma";

const getAllCategories = async () => {
  return await prisma.$queryRaw`
  SELECT c.id, c.name
  FROM categories c;`;
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  return await prisma.$queryRaw`
  SELECT c.id, c.name
  FROM categories c
  WHERE c.id = ${id}
  ;`;
};

module.exports = { getAllCategories, getCategoryById };
