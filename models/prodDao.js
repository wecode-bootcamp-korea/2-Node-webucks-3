import prisma from '../prisma/index.js';

export const getDataFromDB = async searchQuery => {
  return await prisma.$queryRaw`
  SELECT products.id, products.korean_name, products.english_name FROM products WHERE products.id = ${searchQuery}
  `;
};

export const getDatasFromDB = async () => {
  return await prisma.$queryRaw`SELECT * FROM products`;
};

export const addProductQuery = async data => {
  await data.forEach(async product => {
    const { category_id, korean_name, english_name } = product;
    const newProduct = await prisma.$queryRaw`
    INSERT INTO products (category_id, korean_name, english_name)
    VALUES (${category_id}, ${korean_name}, ${english_name})
    `;
  });
  return data;
};
