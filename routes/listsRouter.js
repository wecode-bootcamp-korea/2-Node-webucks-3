import express from "express";
import listController from "../controllers/listsController";

const router = express();

router.get("/lists", listController.getAllList);
router.get("/lists/:id", listController.getListById);

module.exports = router;
