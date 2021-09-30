import categoryService from "../services/categoryService";

const getCategory = async (req, res) => {
  const category = await categoryService.getCategory(); //model의 함수를 호출 (이 함수는 요청이 지시하는 사항인, DB접근하는 내용을 담고 있기 때문에, 꼭 기다려준 후 response보내야 하니 await)
  res.json(category); //model의 함수가 return해준 데이터를, json형식으로 강제하여 response보내줌  
}

export default {getCategory};