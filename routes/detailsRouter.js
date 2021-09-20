import express from "express";
import detailsController from "../controllers/detailsController";

const router = express.Router();

router.get("/details", detailsController.getAllDetail);
router.get("/details/:id", detailsController.getDetailById);

module.exports = router;
