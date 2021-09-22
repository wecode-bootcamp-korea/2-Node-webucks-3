import { usersDao } from "../models/";

const getAllUser = async () => {
  return await usersDao.getAllUser();
};

const createUser = async (req, res) => {
  try {
    return await usersDao.createUser(req, res);
  } catch (error) {
    if (error.meta.code === "1062") {
      throw "이미 중복된 이메일입니다. 다른 이메일을 사용해주세요.";
    }
  }
};

module.exports = { getAllUser, createUser };
