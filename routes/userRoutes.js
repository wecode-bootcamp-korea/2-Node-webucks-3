import express from 'express';
import { userController } from '../controllers';
import tokenController from '../middlewares';
const router = express.Router();

router.get('/', tokenController.verifyToken, userController.getAllUsers);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.patch(
  '/update',
  tokenController.restriction,
  tokenController.verifyToken,
  userController.updateUser
);
router.delete(
  '/delete',
  tokenController.restriction,
  tokenController.verifyToken,
  userController.deleteUser
);

export default router;
