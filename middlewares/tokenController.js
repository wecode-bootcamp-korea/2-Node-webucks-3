import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../config.env` });
import jwt from 'jsonwebtoken';
import utils from '../utils';
import verifySession from '../utils/expiredErrorHandler.js';

const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN),
};

if (process.env.NODE_ENV !== 'development') {
  cookieOptions.secure = true;
}

export const issueAccessToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    issuer: 'oneook',
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = async (user, statusCode, res) => {
  const token = issueAccessToken(user);

  const refreshToken = await jwt.sign({}, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
    issuer: 'oneook',
  });

  res.cookie('accessToken', token, cookieOptions);
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export const restriction = (req, res, next) => {
  if (req.body.email === 'admin@admin.com') {
    req.authorizedAccount = 'admin@admin.com';
  } else {
    req.authorizedAccount = req.body.email;
  }
  next();
};

export const verifyToken = utils.catchAsyncWrap(async (req, res, next) => {
  let accessToken, refreshToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    accessToken = req.headers.authorization.split(' ')[1];
    refreshToken = req.headers.cookie.split('refreshToken=')[1];
  }

  if (!verifySession(accessToken) && !verifySession(refreshToken))
    return next(new utils.AppError('API 접근 권한이 없습니다', 403));

  if (!verifySession(accessToken) && verifySession(refreshToken)) {
    const newAccessToken = await issueAccessToken(req.body.email);
    res.cookie('accessToken', newAccessToken, cookieOptions);
    accessToken = newAccessToken;
    console.log('세션이 끝나서 리프레시 쿠키를 드려요');
  }

  const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  if (
    decoded.id !== req.authorizedAccount &&
    decoded.id !== 'admin@admin.com'
  ) {
    return next(new utils.AppError('접근 권한이 없습니다', 403));
  }
  next();
});
