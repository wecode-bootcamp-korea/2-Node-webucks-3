import detailsDao from "../models/detailsDao";

const getAllDetail = async () => {
  return await detailsDao.getAllDetail();
};

const getDetailById = async (req, res) => {
  return await detailsDao.getDetailById(req, res);
};

module.exports = { getAllDetail, getDetailById };
