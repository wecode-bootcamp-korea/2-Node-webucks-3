import express from 'express';
import userController from '../controllers/userController';
import checkAuth from '../middlewares/checkAuth'

const userRouter = express.Router();

userRouter.post('/signup', userController.createUser);
userRouter.post('/signin', userController.loginUser);
userRouter.get('', checkAuth, userController.getUser); //내 회원정보 조회

export default userRouter;