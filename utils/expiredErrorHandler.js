import dotenv from 'dotenv';
import { verify, JsonWebTokenError } from 'jsonwebtoken';
dotenv.config({ path: '../config.env' });

const verifySession = token => {
  try {
    return verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    if (err instanceof JsonWebTokenError && err.name === 'TokenExpiredError');
    return null;
  }
};

export default verifySession;
