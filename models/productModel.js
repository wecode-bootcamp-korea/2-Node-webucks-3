import prisma from '../prisma'

  const getProductList = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    LEFT JOIN categories
    ON categories.id = products.category_id
    LEFT JOIN images
    ON products.id = images.product_id
    `; 
    //위의 categories엔드포인트에서 get메소드로 요청할 때와 같은 내용이지만, getProduct함수에 다른 내용이 들어갈 것이 없으니 이렇게 표현 가능
  }

  const getProductDetail = async (productId) => {
    return await prisma.$queryRaw`
    SELECT * from products
    LEFT JOIN images
    ON products.id = images.product_id
    LEFT JOIN nutritions
    ON products.id = nutritions.product_id
    LEFT JOIN product_allergies 
    ON product_allergies.product_id = products.id
    LEFT JOIN allergies 
    ON allergies.id = product_allergies.allergy_id
    `;
  } 

  

export default {getProductList, getProductDetail};
