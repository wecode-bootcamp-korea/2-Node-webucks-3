import express from 'express';
import { prodController, tokenController } from '../controllers';

const router = express.Router();

router
  .route('/')
  .get(tokenController.verifyToken, prodController.getProducts)
  .post(tokenController.verifyToken, prodController.createProducts);
router
  .route('/:id')
  .get(tokenController.verifyToken, prodController.getProduct);

export default router;
