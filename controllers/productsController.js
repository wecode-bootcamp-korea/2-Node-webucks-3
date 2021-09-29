import { productsService } from "../services";

const getAllCategories = async () => {
  const categories = await productsService.getAllCategories();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const queryParams = req.params;
  // console.log("QUERY", queryParam);
  const categoryById = await productsService.getCategoryById(id);
  res.json(categoryById);
};

const getAllList = async () => {
  const lists = await productsService.getAllList();
  res.json(lists);
};

const getListById = async (req, res) => {
  const { id } = req.params;
  const list = await productsService.getListById(id);
  res.json(list);
};

const getAllDetail = async () => {
  const details = await productsService.getAllDetail();
  res.json(details);
};

const getDetailById = async (req, res) => {
  const { id } = req.params;
  const detail = await productsService.getDetailById(id);
  res.json(detail);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  getAllList,
  getListById,
  getAllDetail,
  getDetailById,
};
