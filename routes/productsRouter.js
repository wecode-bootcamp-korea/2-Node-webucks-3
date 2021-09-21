import express from "express";
import { productsController } from "../controllers";

const router = express();

router.get("/categories", productsController.getAllCategories);
router.get("/categories/:id", productsController.getCategoryById);
router.get("/lists", productsController.getAllList);
router.get("/lists/:id", productsController.getListById);
router.get("/", productsController.getAllDetail);
router.get("/:id", productsController.getDetailById);

module.exports = router;
