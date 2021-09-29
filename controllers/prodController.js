import { prodService } from '../services';

export const getProducts = async (req, res) => {
  try {
    const products = await prodService.getProductsFromDB();
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `Something went wrong: ${err.message}`,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await prodService.getProductFromDB(req.params.id);
    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `Something went wrong: ${err.message}`,
    });
  }
};

export const createProducts = async (req, res) => {
  try {
    const products = await prodService.createProductsToDB(req.body);
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `Something went wrong: ${err.message}`,
    });
  }
};
