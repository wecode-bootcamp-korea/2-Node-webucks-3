import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import jwt from 'jsonwebtoken';

import { createUserService, userLoginService } from '../services/userService';
import { createSendToken, signToken } from './tokenController';
import AppError from '../utils/appError';
import catchAsyncWrap from '../utils/catchAsyncWrap';

export const createUser = async (req, res) => {
  try {
    const userData = { ...req.body };
    const result = await createUserService(userData);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Something went wrong: ${err.message}`,
    });
  }
};

export const userLogin = catchAsyncWrap(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('이메일과 패스워드를 주세요', 400));
  }
  const user = await userLoginService(email, password);

  if (!user)
    return next(new AppError('이메일과 패스워드를 다시 확인해주세요', 401));

  createSendToken(user, 201, res);
});

// MAKE TOKEN

// JONAS
export const signup = catchAsyncWrap(async (req, res, next) => {
  try {
    const newUser = req.body;

    const token = signToken({ email: 'wonkook@gmail.com' });

    res.status(201).json({
      status: 'success',
      data: {
        user: token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});

// import prisma from '../prisma';

export const login = catchAsyncWrap(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if user exist && password is correct
  const user = true;
  const correct = true;

  if (!user || !correct) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to client
  const token = signToken({ email: 'wonkook@gmail.com' });
  res.status(200).json({
    status: 'success',
    token,
  });
});
