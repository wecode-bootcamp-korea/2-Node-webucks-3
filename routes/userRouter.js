import express from 'express';
import userController from '../controllers/userController';
import checkAuth from '../middlewares/checkAuth'

const userRouter = express.Router();

// 🍀 users엔드포인트에서, post메소드로 요청할 때(회원가입페이지)
userRouter.post('/signup', userController.createUser);
userRouter.get('', checkAuth, userController.getUser);

export default userRouter;