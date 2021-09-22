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
    const user = await usersService.createUser(req, res);
    res.status(200).send({
      message: "CREATE",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getAllUser, createUser };
