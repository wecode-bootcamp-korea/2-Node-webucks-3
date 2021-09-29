import express from 'express';
import { userController, tokenController } from '../controllers';
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

export default router;
