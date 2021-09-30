import categoryModel from '../models/categoryModel';

const getCategory = async () => {
  const category = await categoryModel.getCategory;
  return category;
};

export default { getCategory };