import { productsDao } from "../models";

const getAllCategories = async () => {
  return await productsDao.getAllCategories();
};

const getCategoryById = async (req, res) => {
  return await productsDao.getCategoryById(req, res);
};

const getAllList = async () => {
  return await productsDao.getAllList();
};

const getListById = async (req, res) => {
  return await productsDao.getListById(req, res);
};

const getAllDetail = async () => {
  return await productsDao.getAllDetail();
};

const getDetailById = async (req, res) => {
  return await productsDao.getDetailById(req, res);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getAllList,
  getListById,
  getAllDetail,
  getDetailById,
};
