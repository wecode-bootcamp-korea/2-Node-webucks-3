import prisma from "../prisma";

const getAllCategories = async () => {
  try {
    return await prisma.$queryRaw`
      SELECT
        c.id, c.name
      FROM
        categories c;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

const getCategoryById = async (id) => {
  try {
    return await prisma.$queryRaw`
    SELECT
      c.id, c.name
    FROM categories c
      WHERE c.id = ${id}
    ;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

const getAllList = async () => {
  try {
    return await prisma.$queryRaw`
      SELECT
        p.id, p.korean_name, i.image_url
      FROM
        products p
      LEFT JOIN
        images i ON p.id = i.id
    ;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

const getListById = async (id) => {
  try {
    return await prisma.$queryRaw`
      SELECT
        p.id, p.korean_name, i.image_url
      FROM
        products p
      LEFT JOIN
        images i ON p.id = i.id
      WHERE p.id = ${id}
      ;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

const getAllDetail = async () => {
  try {
    return await prisma.$queryRaw`    
      SELECT
        p.id AS product_id, p.korean_name, p.english_name,
        i.image_url,
        n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, 
        (select group_concat(a.name, '')
        FROM
          products_allergies pa
            , allergies a
          WHERE
            pa.allergy_id = a.id
          AND pa.product_id = p.id
        ) as allergy_name
      FROM
        products p
      LEFT JOIN
        images i ON i.product_id = p.id
      LEFT JOIN
        nutritions n ON n.product_id = p.id
      ;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

const getDetailById = async (id) => {
  try {
    return await prisma.$queryRaw`    
      SELECT
        p.id AS product_id, p.korean_name, p.english_name,
        i.image_url,
        n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, 
          (select group_concat(a.name, '')
          FROM
            products_allergies pa
              , allergies a
            WHERE pa.allergy_id = a.id
            AND pa.product_id = p.id
          ) as allergy_name
      FROM
        products p
      LEFT JOIN
        images i ON i.product_id = p.id
      LEFT JOIN
        nutritions n ON n.product_id = p.id
      WHERE
        p.id IN (${id})
    ;`;
  } catch (error) {
    console.error("ERROR IN DAO", error);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getAllList,
  getListById,
  getAllDetail,
  getDetailById,
};
