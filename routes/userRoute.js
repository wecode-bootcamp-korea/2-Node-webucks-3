import express from "express";
import { userController } from "../controllers";

const router = express.Router();
router.post('/create', userController.addUser)

module.exports = router;