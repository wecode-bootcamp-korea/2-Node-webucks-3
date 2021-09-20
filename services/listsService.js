import listsDao from "../models/listsDao";

const getAllList = async () => {
  return await listsDao.getAllList();
};

const getListById = async (req, res) => {
  return await listsDao.getListById(req, res);
};

module.exports = { getAllList, getListById };
