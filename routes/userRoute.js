import express from "express";
import { userController } from "../controllers";

const router = express.Router();
router.post('/create', userController.addUser)
router.post('/login', userController.checkUser)

module.exports = router;
