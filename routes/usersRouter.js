import express from "express";
import usersController from "../controllers/usersController";

const router = express();

router.get("/users", usersController.getAllUser);
router.post("/users/", usersController.createUser);

module.exports = router;
