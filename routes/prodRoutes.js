import express from 'express';
import { prodController } from '../controllers';

const router = express.Router();

router
  .route('/')
  .get(prodController.getProducts)
  .post(prodController.createProducts);
router.route('/:id').get(prodController.getProduct);

export default router;
