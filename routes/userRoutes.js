import express from 'express';
import { userController, tokenController } from '../controllers';
const router = express.Router();

router.get('/', tokenController.protect, userController.getAllUsers);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.patch('/update', userController.updateUser);

export default router;
