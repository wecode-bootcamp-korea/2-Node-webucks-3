import prisma from '../prisma'

  //1. model
  //복수의 표를 참조해야 하는 상황 (list : product + category + image)
  //앗 select 자체를 여러 번 하는 건 아닌가?
  //left join 한 표 하나로 바꿔야지
  const getProductList = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from categories;
    `; 
    //위의 categories엔드포인트에서 get메소드로 요청할 때와 같은 내용이지만, getProduct함수에 다른 내용이 들어갈 것이 없으니 이렇게 표현 가능
  }

  const getProductDetail = async () => {
    return await prisma.$queryRaw`
    SELECT * from products
    SELECT * from images
    SELECT * from nutritions
    SELECT * from product_allergies
    SELECT * from allergies;
    `;
  } //JOIN한 것 가져오는 게 좋았으려나?

  

export default {getProductList, getProductDetail};
