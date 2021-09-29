import jwt from "jsonwebtoken"

const checkAuth = (req, res, next) => {
  console.log('>>>>>>>>checkAuthMiddleware shows req.headers')
  console.log(req.headers)

  // const token = req.header.token
  // if(!token) {
  //   new Error('INVALID USER', 401)
  // }

  next();
}

// import jwt from "jsonwebtoken"

// const checkAuth = (req, res, next) => {
//   const token = req.header.token
//   if(!token) {
//     new Error('INVALID USER', 401)
//   }

//   let resolvedToken = jwt.verify
//   /*
//   let resolvedToken = jwt.verify(token, 'secret_key')

//   userId = {resolvedToken.userId}
//   req.user = userId //이러면 새 속성이 생김 (?) //없는 키의 프로퍼티를 나중에 추가한단 얘긴 아닌듯.
//   */
//   next();
// }

export default checkAuth;