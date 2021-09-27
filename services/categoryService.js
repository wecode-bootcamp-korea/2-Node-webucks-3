import categoryModel from '../models/categoryModel';

console.log('>>> 임포트만 해온 getCategory상수는 무얼 의미? 모델꺼일듯')
console.log(categoryModel.getCategory)
console.log(categoryModel)

const getCategory = async () => {
  const category = await categoryModel.getCategory;
  return category;
};

console.log('>>> 다시 재정의한..상수,,(?)는 무얼 의미? 서비스꺼일듯')
console.log(getCategory)

export default {getCategory};

console.log(module.exports)