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

export default checkAuth;