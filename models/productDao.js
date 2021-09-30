import { prisma } from "../prisma"

const getAllProducts = async () => {
  return await prisma.$queryRaw`
    SELECT
      i.image_url,
      p.korean_name
    FROM
      products p
    LEFT JOIN
      images i
    ON
      i.product_id = p.id
    `;
}

const getProduct = async(id) => {
  return await prisma.$queryRaw`
    SELECT
      i.image_url,
      p.korean_name,
      p.english_name,
      n.kcal,
      n.fat,
      n.protein,
      n.sodium,
      n.sugars,
      n.caffeine
    FROM
      products p
    LEFT JOIN
      images i
    ON
      i.product_id = p.id
    LEFT JOIN
      nutritions n
    ON
      n.product_id = p.id
    WHERE
      p.id = ${id};
  `;
}

module.exports = { getAllProducts, getProduct };