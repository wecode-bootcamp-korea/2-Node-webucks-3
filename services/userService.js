import userModel from '../models/userModel';
import bcrypt from 'bcryptjs'

//DB에 비밀 정보 넣기 전에, bcrypt 암호화를 여기서!
const createUser = async (email, address, password, phone_number, policy_agreed, username ) => {
  //post메소드면 return 굳이 안 하나?

  // Option 0 : 필수 정보 미입력, 아이디 형식 안 맞음
  if (!(email && password && username)) { 
    res.status(400).json({message: '필수 항목을 입력해주세요'}) 
  } 
  // 중복확인 => 회원가입하는 과정 => 서비스 이미 가입 혹은 아직 안가입?

  // Option1 : 이미 있다 - Error ('USER_ALREADY_EXISTS')
  // if (이미 있다) {

  // } 
  // Option2 : 아직 가입 안 한 경우 => 가입시킴

  // 변수에 바로 메서드 비동기로 실행시킨 것 담아버리기. 전체감싸는 비동기함수 만들고 그거 실행시킨 리턴값 받아오려 하면 오히려 더 꼬임
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  

    await userService.createUser(email, address, hashedPassword, phone_number, policy_agreed, username );
    const userCreated = await userModel.userCreated();
    res.status(201).json(`회원가입에 성공하였습니다. 이메일과 유저네임 : ${userCreated}`);  //여기선 콘솔찍어야겠다 res말고
  
};

//createUser내부에서 써줬지만.. controller에서 써줘야 해서 별도로 만들어봄
const userCreated = async (email, address, password, phone_number, policy_agreed, username ) => {
  return await userModel.userCreated();
}

const loginUser = async (email, address, password, phone_number, policy_agreed, username ) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //????
  return await userModel.userCreated();
}

const getUser = async (req) => {
  return await userModel.getUser();
};

export default {createUser, userCreated, loginUser, getUser};