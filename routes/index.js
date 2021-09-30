import express from "express";
const router = express.Router();

import categoryRoute from "./categoryRoute";
import productRoute from "./productRoute";
import userRoute from "./userRoute";

router.use('/categories', categoryRoute)
router.use('/products', productRoute)
router.use('/users', userRoute)

module.exports = router;
