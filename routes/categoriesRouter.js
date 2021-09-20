import express from "express";
import categoriesController from "../controllers/categoriesController";

const router = express.Router();

router.get("/categories", categoriesController.getAllCategories);
router.get("/categories/:id", categoriesController.getCategoryById);

module.exports = router;
