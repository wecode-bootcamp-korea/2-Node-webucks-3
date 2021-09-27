
// 🍀 users엔드포인트에서, post메소드로 요청할 때(회원가입페이지)
app.post('/users', async (req, res) => {
  //실습하다가 오류나는 거 보기 위해서 쓴 try catch문
  try {
    let { email, address, password, phone_number, policy_agreed, username } = req.body;
    const createUser = await prisma.$queryRaw`
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
    //post잘되었는지 확인받는 response (프론트를 위해) //반환이 먼저 되면 안되니까 위엔 await
    //아래를 안써주면 뱅글뱅글 돌기만 하고, 기다리기만 함. 종료가 안됨. 왜그런진 일단 이해 안됨
    const userCreated = await prisma.$queryRaw`
      SELECT u.email, u.username
      FROM users as u
      ORDER BY id DESC
      LIMIT 1
    `;
    res.status(201).json(`회원가입에 성공하였습니다. 이메일과 유저네임 : ${userCreated}`);
  } catch (err) {
    res.status(400).json({message: '회원정보 입력 양식을 지켜 주세요'}) //입력양식 안 지킨 걸, 여기서 catch(err)로 잡는 건 아닐 것 같지만
  }

});