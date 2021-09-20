import detailsService from "../services/detailsService";

const getAllDetail = async (req, res) => {
  const details = await detailsService.getAllDetail();
  res.json(details);
};

const getDetailById = async (req, res) => {
  const detail = await detailsService.getDetailById(req, res);
  res.json(detail);
};

module.exports = { getAllDetail, getDetailById };
