import { categoryDao } from "../models"

const getCategories = async () => {
  const categories = await categoryDao.getCategories();
  return categories;
}

module.exports = { getCategories };