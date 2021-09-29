import express from 'express';
import { signup, login, getAllUsers } from '../controllers/userController.js';
import { protect } from '../controllers/tokenController.js';
const router = express.Router();

router.post('/test', protect, (req, res) => {
  res.status(200).json({
    message: "You're Authorized Person!",
  });
});
router.get('/', protect, getAllUsers);
router.post('/signup', signup);
router.post('/login', login);

export default router;
