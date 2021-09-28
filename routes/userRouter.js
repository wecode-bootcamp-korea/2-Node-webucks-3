import express from 'express';

const userRouter = express.Router();

// 🍀 users엔드포인트에서, post메소드로 요청할 때(회원가입페이지)
userRouter.post('/', userController.postUser);

export default userRouter;