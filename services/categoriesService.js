import categoriesDao from "../models/categoriesDao";

const getAllCategories = async () => {
  return await categoriesDao.getAllCategories();
};

const getCategoryById = async (req, res) => {
  return await categoriesDao.getCategoryById(req, res);
};

module.exports = { getAllCategories, getCategoryById };
