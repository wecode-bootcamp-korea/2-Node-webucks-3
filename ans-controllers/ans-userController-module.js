
import userService from ''

const findallusers = async (req,res) => {
  try{
    const users = await userService.findAllUsers();
    res.status(201).json({
      message: 'succ'
      data : users
    })
  }  
  catch(err){
    console.log(err)
  }

}

const createUSers = 
//same

try{
  
}catch(err){
  console.log(err)
}

export default {
  findallusers,
  createUSers
}