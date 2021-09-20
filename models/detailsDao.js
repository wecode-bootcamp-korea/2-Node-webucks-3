import prisma from "../prisma";

const getAllDetail = async () => {
  return await prisma.$queryRaw`    
    SELECT p.id AS product_id, p.korean_name, p.english_name,
    i.image_url,
    n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, 
      (select group_concat(a.name, '')
      FROM products_allergies pa
          , allergies a
          WHERE pa.allergy_id = a.id
          AND pa.product_id = p.id
      ) as allergy_name
    FROM products p
    LEFT JOIN images i ON i.product_id = p.id
    LEFT JOIN nutritions n ON n.product_id = p.id
    ;`;
};

const getDetailById = async (req, res) => {
  const { id } = req.params;
  return await prisma.$queryRaw`    
  SELECT p.id AS product_id, p.korean_name, p.english_name,
  i.image_url,
  n.calory, n.fat, n.protein, n.sodium, n.sugar, n.caffeine, 
    (select group_concat(a.name, '')
    FROM products_allergies pa
        , allergies a
        WHERE pa.allergy_id = a.id
        AND pa.product_id = p.id
    ) as allergy_name
  FROM products p
  LEFT JOIN images i ON i.product_id = p.id
  LEFT JOIN nutritions n ON n.product_id = p.id
  WHERE p.id IN (${id})
  ;`;
};

module.exports = { getAllDetail, getDetailById };
