import express from "express";
const router = express.Router();

import productsRouter from "./productsRouter";
import usersRouter from "./usersRouter";

router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
