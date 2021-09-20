import listService from "../services/listsService";

const getAllList = async (req, res) => {
  const lists = await listService.getAllList();
  res.json(lists);
};

const getListById = async (req, res) => {
  const list = await listService.getListById(req, res);
  res.json(list);
};

module.exports = { getAllList, getListById };
