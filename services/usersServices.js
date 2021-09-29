import { usersDao } from "../models/";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

const makeToken = async (email) => {
  try {
    const [userInfo] = await usersDao.getUserInfo(email);
    if (userInfo !== undefined) {
      return await jwt.sign(
        { id: userInfo.id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (userData) => {
  const [getEmail] = await usersDao.getUserInfo(userData.email);
  if (getEmail !== undefined) {
    const error = new Error("DUPLICATED_EMAIL");
    error.statusCode = 400;
    error.message = "이미 중복된 이메일입니다. 다른 이메일을 사용해주세요";
    throw error;
  } else {
    const hashedPsw = await makeHash(userData.password);
    await usersDao.createUser(userData.email, hashedPsw);
    return { message: "회원가입에 성공했습니다." };
  }

  // if (error.meta.code === "1062") {
  // }
};

const getUserEmail = async (email, password) => {
  const [userInfo] = await usersDao.getUserInfo(email);
  if (userInfo === undefined) {
    const error = new Error("INVALID_EMAIL");
    error.statusCode = 400;
    error.message = "존재하지 않는 이메일입니다";
    throw error;
  }
  const validPsw = await bcrypt.compare(password, userInfo.password);
  if (validPsw) {
    return {
      message: "로그인에 성공하셨습니다.",
    };
  } else {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;
    error.message = "잘못된 비밀번호 입니다.";
    throw error;
  }
};

module.exports = { getAllUser, createUser, getUserEmail, makeToken };
