import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import { userService } from '../services';
import { createSendToken } from './tokenController';
import utils from '../utils';

export const getAllUsers = utils.catchAsyncWrap(async (req, res, next) => {
  const users = await userService.getAllUsers();
  res.status(200).json({
    status: 'success',
    users,
  });
});

export const signup = utils.catchAsyncWrap(async (req, res, next) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    address: req.body.address,
    phone_number: req.body.phone_number,
    policy_agreed: req.body.policy_agreed,
  };
  Object.values(newUser).forEach(ele => {
    if (ele !== 'policy_agreed') {
      if (!ele) {
        return next(new utils.AppError('불완전한 회원정보!', 400));
      }
    }
  });
  const result = await userService.registerUser(newUser);
  res.status(201).json({
    status: 'success',
    result,
  });
});

export const login = utils.catchAsyncWrap(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new utils.AppError('이메일과 패스워드를 주세요', 400));
  }
  const user = await userService.login(email, password);

  if (!user)
    return next(
      new utils.AppError('이메일과 패스워드를 다시 확인해주세요', 401)
    );

  createSendToken(user, 201, res);
});

export const updateUser = utils.catchAsyncWrap(async (req, res, next) => {
  const email = req.body?.email;
  if (!email) throw new utils.AppError('이메일을 입력해주세요', 400);

  const updateInfo = {
    username: req.body?.username,
    address: req.body?.address,
    phoneNumber: req.body?.phonenumber,
  };

  const result = await userService.updateUser(email, updateInfo);

  res.status(201).json({
    result,
  });
});

export const deleteUser = utils.catchAsyncWrap(async (req, res, next) => {
  const result = await userService.deleteUser(
    req.body.email,
    req.body.password
  );
  res.status(204).json({
    message: `${req.body.email} 계정이 삭제되었습니다.`,
  });
});
