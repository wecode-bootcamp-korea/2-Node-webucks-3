import usersDao from "../models/usersDao";

const getAllUser = async () => {
  return await usersDao.getAllUser();
};

const createUser = async (req, res) => {
  try {
    const user = await usersDao.createUser(req, res);
    return user;
  } catch (error) {
    if (error.meta.code === "1062") {
      throw new Error(error);
    }
  }
};

module.exports = { getAllUser, createUser };
