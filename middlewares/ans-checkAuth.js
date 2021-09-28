//https://helloinyong.tistory.com/111
//위에꺼 설명보고 다시 해보기(시간 되면)

import jwt from "jsonwebtoken"

const checkAuth = (req, res) => {
  const token = req.header.token
  if(!token) {
    new Error('INVALID USER', 401)
  }
  /*
  let resolvedToken = jwt.verify(token, 'secret_key')

  userId = {resolvedToken.userId}
  req.user = userId //이러면 새 속성이 생김 (?)
  */
  next();
}