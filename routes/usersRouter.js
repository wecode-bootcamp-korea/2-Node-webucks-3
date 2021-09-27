import express from "express";
import { usersController } from "../controllers";

const router = express();

router.get("/", usersController.getAllUser);
router.post("/login", usersController.loginUser);
router.post("/register", usersController.createUser);

module.exports = router;
