import userDao from "../models/userDao";

const addUser = async (email, password, username, address, phone_number, policy_agreed) => {
  return await userDao.addUser(email, password, username, address, phone_number, policy_agreed);
}

module.exports = {addUser}

