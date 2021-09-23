import express from "express";
import {productController} from "../controllers";

const router = express.Router();
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getSomeProduct);

module.exports = router;
