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
    });
    return res.json(user);
  } catch (error) {
    res.send({ error: "이미 중복된 회원입니다." });
  }
};

module.exports = { getAllUser, createUser };
