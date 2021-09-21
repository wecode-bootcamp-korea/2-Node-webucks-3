import express from "express";
import { usersController } from "../controllers";

const router = express();

router.get("/", usersController.getAllUser);
router.post("/", usersController.createUser);

module.exports = router;
