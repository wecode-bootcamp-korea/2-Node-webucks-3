import usersService from "../services/usersServices";
import jwt from "jsonwebtoken";

const getAllUser = async (req, res) => {
  try {
    const users = await usersService.getAllUser();
    res.status(200).send({
      message: "SUCCESS_GET_ALL_USER",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    await usersService.createUser(userData);
    res.status(201).send({
      message: "CREATED_USER",
    });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode).send({
      error: message,
      message: "FAILED_CREATE_USER",
    });
  }
};

const getUserAuth = async (req, res) => {
  const decoded = jwt.verify(
    req.cookies.token,
    process.env.ACCESS_TOKEN_SECRET
  );
  return res.send({
    token: decoded,
    message: "PERMISSION_USER",
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await usersService.makeToken(email);
    res.cookie("token", token);
    const authUser = await usersService.getUserEmail(email, password);
    return res.status(200).json(authUser);
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode).send({
      error: message,
      message: "FAILED_LOGIN",
    });
  }
};

module.exports = { getAllUser, createUser, loginUser, getUserAuth };
