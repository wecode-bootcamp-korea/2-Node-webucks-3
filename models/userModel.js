const createUser = async () => {
  let { email, address, password, phone_number, policy_agreed, username } = req.body;
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

const getUser = async () => {
  let {username} = req.header
  return await prisma.$queryRaw`
        SELECT u.email, u.address, u.phone_number, u.policy_agreed, u.username
        FROM users as u
        WHERE username=${username}; 
      `;
}
