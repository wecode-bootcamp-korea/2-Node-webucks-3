import prisma from '../prisma';
import utils from '../utils';

export const findUserByEmail = email => {
  return prisma.$queryRaw`
  SELECT email, username, address, phone_number, policy_agreed FROM users WHERE email = ${email}
  `;
};

export const registerUserToDB = async userData => {
  try {
    const doesUserAlreadyExist = await findUserByEmail(userData.email);

    if (doesUserAlreadyExist.length !== 0)
      throw new utils.AppError('이미 존재하는 이메일입니다.', 400);

    const result = await prisma.$queryRaw`
    INSERT INTO users (email, password, username, address, phone_number, policy_agreed)
    VALUES (${userData.email}, ${userData.hash}, ${userData.username}, ${userData.address}, ${userData.phone_number}, ${userData.policy_agreed})
    `;
    return result;
  } catch (err) {
    throw err;
  }
};

export const searchUserFromDB = async email => {
  try {
    const hashedPw = await prisma.$queryRaw`
    SELECT users.password FROM users WHERE users.email = ${email}
    `;
    if (!hashedPw.length)
      throw new utils.AppError('존재하지 않는 유저입니다', 404);
    return hashedPw;
  } catch (err) {
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    const result = await prisma.$queryRaw`
    SELECT * FROM users;
    `;
    if (!result.length)
      throw new utils.AppError('유저가 존재하지 않습니다.', 404);
    return result;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (email, updateInfo) => {
  await prisma.user.update({
    where: {
      email,
    },
    data: updateInfo,
  });
};

export const deleteUser = async email => {
  await prisma.$queryRaw`
  DELETE FROM users WHERE email=${email}
  `;
};
