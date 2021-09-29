import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export const verifyToken = async (req, res, next) => {
  try {
    const secretKey = await process.env.JWT_SECRET_KEY;
    const result = await promisify(jwt.verify)(
      req.cookies.jwt,
      secretKey,
      (err, authData) => {
        if (err) throw new Error('NONONONONONONONO');
      }
    );
    console.log(result);
    // const result = await jwt.verify(
    //   req.cookies.jwt,
    //   secretKey,
    //   (err, authData) => {
    //     if (err)
    //       return res
    //         .status(403)
    //         .json({ message: 'verifyToken: ' + err.message });
    //   }
    // );
    next();
  } catch (err) {
    throw new Error(err.message);
  }
};
