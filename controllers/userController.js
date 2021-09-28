import userService from '../services/userService'


const createUser = async (req, res) => {
  let { email, address, password, phone_number, policy_agreed, username } = req.body;
  await userService.createUser(email, address, password, phone_number, policy_agreed, username); 
  res.json(userService.userCreated()); 
}

const getUser = async (req, res) => {
  //만약 로그인성공하면 headers에 Authorization생기겠지? 그거 뽑아오는거 여기서
  console.log('>>>>>>req.headers')
  console.log(req.headers)
  
  const user = await userService.getUser(); 
  res.json(user); 
}


export default {createUser, getUser};
