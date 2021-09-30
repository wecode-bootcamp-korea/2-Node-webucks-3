import {categoryService} from "../services"

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(201).json(categories);
  } catch (err) {
    console.log(err)
  }
}

module.exports =  {getCategories} ;

