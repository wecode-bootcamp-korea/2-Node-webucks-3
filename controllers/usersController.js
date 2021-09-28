import usersService from "../services/usersServices";

const getAllUser = async (req, res) => {
  try {
    const users = await usersService.getAllUser();
    res.status(200).send({
      message: "SUCCESS RESPONSE",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await usersService.createUser(email, password);
    return res.json({
      message: "SUCCESS CREATE",
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
