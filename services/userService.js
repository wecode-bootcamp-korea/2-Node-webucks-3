import bcrypt from 'bcrypt';
import { userDao } from '../models';
import AppError from '../utils/appError.js';
import catchAsyncWrap from '../utils/catchAsyncWrap';

export const getAllUsers = async () => {
  try {
    const users = await userDao.getAllUsers();
    if (!users.length) {
      return new AppError('유저 정보가 없습니다', 404);
    }
    return users;
  } catch (err) {
    throw err;
  }
};

export const createUserService = async userData => {
  try {
    const hash = await bcrypt.hash(userData.password, 10);
    await userDao.createUserToDB(Object.assign(userData, { hash }));
    return userData.email;
  } catch (err) {
    throw err;
  }
};

export const userLoginService = async (email, password) => {
  const [userHash] = await userDao.searchUserFromDB(email);
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
