import {userService} from "../services";

const addUser = async(req, res) => {
  try{
    const {email, password, username, address, phoneNumber, policyAgreed} = req.body;
    const createdUser =  await userService.addUser(email, password, username, address, phoneNumber, policyAgreed);
    res.status(201).json({
      user: {
        email: createdUser.email,
        username: createdUser.username,
        address: createdUser.address,
        phoneNumber: createdUser.phoneNumber,
      }
    })
  } catch (err) {
    res.status(500).json({message: 'fail'})
    console.log(err)
  }
}

const checkUser = async(req, res) => {
  try {
    const {email, password} = req.body;
    const userCheckResult = await userService.checkUser(email, password)
    res.status(201).json(userCheckResult);
  } catch (err) {
    console.log(err)
  }
}

module.exports = {addUser, checkUser}
