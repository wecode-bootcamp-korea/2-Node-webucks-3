import express from 'express';
import {
  createUser,
  userLogin,
  signup,
  login,
  protect,
} from '../controllers/userController.js';
import { tokenController } from '../middlewares';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('Hello!');
});

router.post('/signup', tokenController.verifyToken, createUser);
router.post('/login', userLogin);
router.post('/verify', tokenController.verifyToken);
router.post('/testsignup', signup);
router.post('/testlogin', login);
router.post('/getAllUsers', protect, login);

export default router;
