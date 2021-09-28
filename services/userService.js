import userModel from '../models/userModel';



const createUser = async (req) => {
  //post메소드면 return 굳이 안 하나?
  let { email, password, username } = req.body;
  if (!(email && password && username)) { 
    res.status(400).json({message: '필수 항목을 입력해주세요'}) 
  } else {
    await userService.createUser();
    const userCreated = await userModel.userCreated();
    res.status(201).json(`회원가입에 성공하였습니다. 이메일과 유저네임 : ${userCreated}`);  
  }
};

//createUser내부에서 써줬지만.. controller에서 써줘야 해서 별도로 만들어봄
const userCreated = async (req) => {
  return await userModel.userCreated();
}

export default {createUser, userCreated};