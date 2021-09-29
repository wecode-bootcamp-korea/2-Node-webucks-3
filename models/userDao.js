import prisma from '../prisma';

export const registerUserToDB = async userData => {
  try {
    const doesUserAlreadyExist = await prisma.$queryRaw`
    SELECT users.email FROM users WHERE users.email = ${userData.email}
    `;

    if (doesUserAlreadyExist.length !== 0)
      throw new Error('User Already Exist!');

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
    if (!hashedPw.length) throw new Error('User is not exist');
    return hashedPw;
  } catch (err) {
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    return await prisma.$queryRaw`
    SELECT * FROM users;
    `;
  } catch (err) {
    throw err;
  }
};

// export const updateUser = async () => {
//   await prisma.user.update({
//     where: {
//       email: 'viola@prisma.io',
//     },
//     data: {
//       name: 'Viola the Magnificent',
//     },
//   });
// };
