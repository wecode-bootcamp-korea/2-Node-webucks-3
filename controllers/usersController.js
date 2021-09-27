import usersService from "../services/usersServices";

const getAllUser = async (req, res) => {
  try {
    const users = await usersService.getAllUser();
    res.status(200).send({
      message: "SUCCEED",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersService.createUser(email, password);
    res.status(200).send({
      message: "SUCCESS REGISTER",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    return await usersService.getUserEmail(req, res);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getAllUser, createUser, loginUser };
