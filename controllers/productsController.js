import { productsService } from "../services";

const getAllCategories = async (req, res) => {
  const categories = await productsService.getAllCategories();
  res.json(categories);
};

//req처리하는 걸 컨트롤러에서 받아서 req.body만 넘기기
const getCategoryById = async (req, res) => {
  const categoryById = await productsService.getCategoryById(req, res);
  res.json(categoryById);
};

const getAllList = async (req, res) => {
  const lists = await productsService.getAllList();
  res.json(lists);
};

const getListById = async (req, res) => {
  const list = await productsService.getListById(req, res);
  res.json(list);
};

const getAllDetail = async (req, res) => {
  const details = await productsService.getAllDetail();
  res.json(details);
};

const getDetailById = async (req, res) => {
  const detail = await productsService.getDetailById(req, res);
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
// 2. 추각코 공부 키워드 : export vs export default vs module