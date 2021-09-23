import {userService} from "../services";

const addUser = async(req, res) => {
  const {email, password, username, address, phone_number, policy_agreed} = req.body;
  try{
    const createdUser =  await userService.addUser(email, password, username, address, phone_number, policy_agreed);
    res.status(201).json({
      user: {
        email: createdUser.email,
        password: createdUser.password,
        username: createdUser.username,
        address: createdUser.address,
        phone_number: createdUser.phone_number,
        policy_agreed: createdUser.policy_agreed
      }
    }
    )
  } catch (err) {
    res.status(500).json({message: 'fail'})
    console.log(err)
  }
}

module.exports = {addUser}