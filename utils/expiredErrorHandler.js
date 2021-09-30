import dotenv from 'dotenv';
import { verify, TokenExpiredError } from 'jsonwebtoken';
import AppError from './appError';
dotenv.config({ path: `${__dirname}/../config.env` });

const verifySession = async token => {
  try {
    return await verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    if (err instanceof TokenExpiredError) return null;
    throw new AppError('유효하지 않은 토큰입니다.', 403);
  }
};

export default verifySession;
