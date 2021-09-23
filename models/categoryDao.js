import {prisma} from "../prisma"

const getCategories = async () => {
  return await prisma.$queryRaw`
    SELECT
      c.id,
      c.name
    FROM
      categories c
  `;
}

module.exports = {getCategories};