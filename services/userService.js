import userDao from "../models/userDao";
import {hash, compare} from "bcryptjs"
import jwt from "jsonwebtoken";


const addUser = async (email, password, username, address, phoneNumber, policyAgreed) => {

  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);
  return await userDao.addUser(email, password, hashedPassword, username, address, phoneNumber, policyAgreed);
}

const checkUser = async (email, password) => {
    try {
      const [existingUser] = await userDao.checkUser(email);
      const isValidUser = await compare(password, existingUser.hashed_password);
      if(isValidUser) {
        const token = jwt.sign({ id: existingUser.id }, 'server_made_secret_key', { expiresIn: '1h' })
       return {message: `반갑습니다 ${existingUser.username}님`, token}
      } else {
        return {message: `비밀번호가 맞지 않습니다`}
      }
    } catch (err) {
        return {message: "존재하지 않는 이메일입니다"}
    }
}

module.exports = {addUser, checkUser}

