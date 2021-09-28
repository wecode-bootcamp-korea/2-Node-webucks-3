import { productService } from "../services";

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(201).json(products);
  } catch (err){
    console.log(err)
  }
}

const getProduct = async (req, res) => {
  const {id} = req.params;
  try{
    const product = await productService.getProduct(id);
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getAllProducts, getProduct };
