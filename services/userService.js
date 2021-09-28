import userDao from "../models/userDao";
import {hash, compare} from "bcryptjs"


const addUser = async (email, password, username, address, phoneNumber, policyAgreed) => {
  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);
  return await userDao.addUser(email, password, hashedPassword, username, address, phoneNumber, policyAgreed);
}

const checkUser = async (email, password) => {
  const [existingUser] = await userDao.checkUser(email);
    if(!existingUser) {
      return {message: "존재하지 않는 이메일입니다"}
    }
    try {
      const isValidUser = await compare(password, existingUser.hashed_password);
      if(isValidUser) {
       return {message: `반갑습니다 ${existingUser.username}님`}
      } else {
        return {message: `비밀번호가 맞지 않습니다`}
      }
    } catch (err) {
      console.log(err)
    }
}

module.exports = {addUser, checkUser}

