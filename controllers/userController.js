import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import jwt from 'jsonwebtoken';

import { createUserService, userLoginService } from '../services/userService';
import AppError from '../utils/appError';
import catchAsyncWrap from '../utils/catchAsyncWrap';

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user);

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };

  if (process.env.NODE_ENV !== 'development') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

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

// req.headers['authorization'] = `Bearer ${req.cookies.jwt}`;
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = { email, password };
    const result = await userLoginService(userData);
    // await jwt.sign(userData, process.env.JWT_SECRET_KEY, (err, token) => {
    //   if (err) throw new Error('Something went wrong!');
    // });
    if (result) {
      createSendToken(userData.email, 201, res);
    } else {
      throw new Error('Something went wrong!!!!!!!!!!!');
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Something went wrong: ${err.message}`,
    });
  }
};

// MAKE TOKEN
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

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

export const protect = catchAsyncWrap(async (req, res, next) => {
  // 이 아이는 토큰을 확인해서 권한을 결정하는 역할을 합니다
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) Verification token
  // const decoded = await promisify(jwt.verify)(
  //   token,
  //   process.env.JWT_SECRET_KEY
  // );
  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded);
  // 3) Check if user still exists
  // const freshUser = await User.findById(decoded.id);
  // if (!freshUser) {
  //   return next(
  //     new AppError(
  //       'The user belonging to this token does no longer exist.',
  //       401
  //     )
  //   );
  // }

  // 4) Check if user changed password after the token was issued
  // Not now

  // Grant access to protected route
  // console.log(decoded);
  req.user = decoded.id.email;
  console.log(req.user);
  next();
});
