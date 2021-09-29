import express from 'express';
import {
  createUser,
  userLogin,
  signup,
  login,
} from '../controllers/userController.js';
import { protect } from '../controllers/tokenController.js';
const router = express.Router();

router.post('/test', protect, (req, res) => {
  res.status(200).json({
    message: "You're Authorized Person!",
  });
});
router.post('/signup', createUser);
router.post('/login', userLogin);

export default router;
