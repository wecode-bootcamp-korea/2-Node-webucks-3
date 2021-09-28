import { usersDao } from "../models/";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const getAllUser = async () => {
  return await usersDao.getAllUser();
};

const makeHash = async (password) => {
  return await bcrypt
    .genSalt()
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .catch((err) => console.error(err.message));
};

const getUserEmail = async (req, res) => {
  const { email, password } = req.body;
  const [userInfo] = await usersDao.getUserInfo(email);
  if (userInfo === undefined) {
    throw "가입된 이메일이 아닙니다.";
  }
  try {
    const makeToken = await jwt.sign(
      { id: userInfo.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    const decoded = jwt.verify(makeToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    const validPsw = await bcrypt.compare(password, userInfo.password);
    if (validPsw) {
      res.status(200).send({
        message: "로그인에 성공하셨습니다.",
      });
      return res.cookie("");
    } else {
      return res.status(200).json({ message: "잘못된 비밀번호입니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (email, password) => {
  try {
    const hashedPsw = await makeHash(password);
    return await usersDao.createUser(email, hashedPsw);
  } catch (error) {
    if (error.meta.code === "1062") {
      throw "이미 중복된 이메일입니다. 다른 이메일을 사용해주세요.";
    }
  }
};

module.exports = { getAllUser, createUser, getUserEmail };
