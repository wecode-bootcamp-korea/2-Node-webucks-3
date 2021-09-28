import prisma from '../prisma'

const createUser = async (email, address, password, phone_number, policy_agreed, username ) => {
  await prisma.$queryRaw`
  INSERT INTO
    users (
      email, 
      address, 
      password, 
      phone_number, 
      policy_agreed,
      username
    )
  VALUES (
    ${email}, 
    ${address}, 
    ${password}, 
    ${phone_number}, 
    ${policy_agreed}, 
    ${username}
  );
  `;
}

const userCreated = async () => {
  return await prisma.$queryRaw`
        SELECT u.email, u.username
        FROM users as u
        ORDER BY id DESC
        LIMIT 1
      `;
}

const getUser = async (req) => {
  //req.header에 담긴 token을 미들웨어에서 깐 결과 가져오기!
  return await prisma.$queryRaw`
        SELECT u.email, u.address, u.phone_number, u.policy_agreed, u.username
        FROM users as u; 
      `;
}
//WHERE username=${username}

export default {createUser, userCreated, getUser};
