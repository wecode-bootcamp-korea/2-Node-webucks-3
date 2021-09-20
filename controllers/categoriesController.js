import categoriesController from "../services/categoriesService";

const getAllCategories = async (req, res) => {
  const categories = await categoriesController.getAllCategories();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const categoryById = await categoriesController.getCategoryById(req, res);
  res.json(categoryById);
};

module.exports = { getAllCategories, getCategoryById };
// 2. 추각코 공부 키워드 : export vs export default vs module
