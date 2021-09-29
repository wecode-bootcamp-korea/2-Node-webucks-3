import bcrypt from 'bcrypt';
import { createUserToDB, searchUserFromDB } from '../models/userDao.js';
import AppError from '../utils/appError.js';

export const createUserService = async userData => {
  try {
    const hash = await bcrypt.hash(userData.password, 10);
    return await createUserToDB(Object.assign(userData, { hash }));
  } catch (err) {
    throw err;
  }
};

export const userLoginService = async (email, password) => {
  const [userHash] = await searchUserFromDB(email);
  console.log(userHash);
  if (userHash.password) {
    const validPass = await bcrypt.compare(password, userHash.password);
    if (!validPass) {
      throw new AppError('Wrong password!', 400);
    } else {
      return email;
    }
  } else {
    throw new AppError('User is not exist', 404);
  }
};
