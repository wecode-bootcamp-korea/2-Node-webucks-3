import bcrypt from 'bcrypt';
import utils from '../utils';
import { userDao } from '../models';

export const getAllUsers = async () => {
  try {
    const users = await userDao.getAllUsers();
    if (!users.length) {
      return new utils.AppError('유저 정보가 없습니다', 404);
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
      throw new utils.AppError('잘못된 비밀번호입니다.', 400);
    } else {
      return email;
    }
  } else {
    throw new utils.AppError('유저가 존재하지 않습니다.', 404);
  }
};

export const updateUser = async (email, updateInfo) => {
  const validate = await userDao.findUserByEmail(email);
  if (!validate.length)
    throw new utils.AppError('해당 유저가 존재하지 않습니다', 404);

  await userDao.updateUser(email, updateInfo);

  return await userDao.findUserByEmail(email);
};

export const deleteUser = async (email, password) => {
  try {
    const user = await login(email, password);
    if (!user) throw err;
    await userDao.deleteUser(email);
    return user;
  } catch (err) {
    throw err;
  }
};
