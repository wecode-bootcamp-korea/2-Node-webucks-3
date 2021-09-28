import userService from '../services/userService'

const createUser = async (req, res) => {
  await userService.createUser(); 
  res.json(userService.userCreated()); 
}

const getUser = 

export default {createUser, getUser};