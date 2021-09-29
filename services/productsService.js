import { productsDao } from "../models";

const getAllCategories = async () => {
  return await productsDao.getAllCategories();
};

const getCategoryById = async (id) => {
  return await productsDao.getCategoryById(id);
};

const getAllList = async () => {
  return await productsDao.getAllList();
};

const getListById = async (id) => {
  return await productsDao.getListById(id);
};

const getAllDetail = async () => {
  return await productsDao.getAllDetail();
};

const getDetailById = async (id) => {
  return await productsDao.getDetailById(id);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getAllList,
  getListById,
  getAllDetail,
  getDetailById,
};
