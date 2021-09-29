import jwt from 'jsonwebtoken';
import utils from '../utils';

export const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN * 1,
  });
};

export const createSendToken = (user, statusCode, res) => {
  const token = signToken(user);

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN),
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

export const restriction = (req, res, next) => {
  if (req.body.email === 'admin@admin.com') {
    req.authorizedAccount = 'admin@admin.com';
  } else {
    req.authorizedAccount = req.body.email;
  }
  next();
};

export const verifyToken = utils.catchAsyncWrap(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new utils.AppError('접근 권한이 없습니다', 403));
  }

  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (
    decoded.id !== req.authorizedAccount &&
    decoded.id !== 'admin@admin.com'
  ) {
    return next(new utils.AppError('접근 권한이 없습니다', 403));
  }
  next();
});
