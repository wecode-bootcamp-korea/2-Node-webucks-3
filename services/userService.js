import bcrypt from 'bcrypt';
import { userDao } from '../models';
import AppError from '../utils/appError.js';

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

export const registerUser = async userData => {
  try {
    const hash = await bcrypt.hash(userData.password, 10);
    await userDao.registerUserToDB(Object.assign(userData, { hash }));
    return userData.email;
  } catch (err) {
    throw err;
  }
};

export const login = async (email, password) => {
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
