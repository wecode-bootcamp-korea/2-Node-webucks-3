import { usersDao } from "../models/";

const getAllUser = async () => {
  return await usersDao.getAllUser();
};

const createUser = async (req, res) => {
  try {
    return await usersDao.createUser(req, res);
  } catch (error) {
    if (error.meta.code === "1062") {
      throw new Error(error);
    }
  }
};

module.exports = { getAllUser, createUser };
