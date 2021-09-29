import express from 'express';
import {
  getProduct,
  getProducts,
  createProducts,
} from '../controllers/prodController.js';

const router = express.Router();

router.route('/').get(getProducts).post(createProducts);
router.route('/:id').get(getProduct);

export default router;
