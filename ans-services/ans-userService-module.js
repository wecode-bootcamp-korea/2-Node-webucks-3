import userDao from ''

//service
//sometimes, DAo importing only
//sometimes, controller -> model only
//but there might be sth else

const findAllusers = async () => {

  
  return await userDAo.findAllusers();
}

//findAllUser메소드는 오직 role이 스태프일때만 쓸 수 있어야겠지

// const findAllusers = async () => {
//   if(role== 'staff'){
//     return await userDAo.findAllusers();

//   }
//    return new Error('permission denied')
// }

const createUSer = async(name,email,pasword) => {
  const existignUser = await userDAo.findUserByEmail(email);
  if(existingUSer){
    return new Error('usr already exist')
  }
  return await userDao.createUser(name.email.password)