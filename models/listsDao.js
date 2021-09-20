import prisma from "../prisma";

const getAllList = async () => {
  return await prisma.$queryRaw`
    SELECT p.id, p.korean_name, i.image_url
    FROM products p
    LEFT JOIN images i ON p.id = i.id
  ;`;
};

const getListById = async (req, res) => {
  const { id } = req.params;
  return await prisma.$queryRaw`
    SELECT p.id, p.korean_name, i.image_url
    FROM products p
    LEFT JOIN images i ON p.id = i.id
    WHERE p.id = ${id}
    ;`;
};

module.exports = { getAllList, getListById };
