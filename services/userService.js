import bcrypt from 'bcrypt';
import { createUserToDB, searchUserFromDB } from '../models/userDao.js';

export const createUserService = async userData => {
  try {
    const hash = await bcrypt.hash(userData.password, 10);
    return await createUserToDB(Object.assign(userData, { hash }));
  } catch (err) {
    throw err;
  }
};

export const userLoginService = async userData => {
  try {
    const { email, password } = userData;
    const [userHash] = await searchUserFromDB(email);
    if (userHash.password) {
      const validPass = await bcrypt.compare(password, userHash.password);
      if (!validPass) {
        throw new Error('Wrong password!');
      } else {
        return validPass;
      }
    } else {
      throw new Error('User is not exist');
    }
  } catch (err) {
    throw err;
  }
};

// import jwt from 'jsonwebtoken';
// export const generateToken = async (req, res, next) => {
//   try {
//     const userData = req.body;
//     await jwt.sign(userData, process.env.JWT_SECRET_KEY, (err, token) => {
//       if (err) throw new Error('Something went wrong!');
//       return token;
//       res.cookie('jwt', token, { maxAge: 30000 });
//     });
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };
