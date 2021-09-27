import prisma from '../prisma'

//1.model //DB와의 통신은 오래 걸리니, async 비동기로 처리해, getCategory(?)함수 실행 이후 다른 코드가 있을 경우 동시작업 가능케 하기. 이 예제엔 그런 다른 코드 없는듯. //❓그런데 라우터단에서 함수가져올때도 비동기를 꼭 써줘야 하나? 통신도아닌데
const getCategory = async () => {
  const category = await prisma.$queryRaw`
  SELECT * from categories;
  `;
  return category; //get 메소드 : DB에서 SELECT한 걸 response에 담아줄 거니까, return값으로!
}

export default {getCategory};
console.log('>>>model exported what')
console.log(module.exports)