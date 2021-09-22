//prisma 폴더에!!!! index.js만들면!!!
//Dao 폴더가 여러 개면 그걸 일일이 임포트해와야했던 거 해결 가능
//{}로 prisma 편하게 가져올 수 있음 (?!?!!?!)

// import { Router } from 'express';
import prisma from '../prisma'
 //orm을 써도 model단에서 해ㅜ저야지 나주에 편함
const findAllUsers = async() => {
  return await prisma.user.findMany();
}
//리퀘스트를 백엔드로 넘겨주면서 바로 ? 해주는 거를 미들웨어라 함?
// 고로 userRouter.js의 Router.get('/users, middleware, usercontroller')
//미들웨어에서는 리퀘스트에 넣은, '로그인했는지?'정도만 해줌
//middleware -> 권한의 유무, 있다면 어떤 권한인지 알려준다.
//함수까지 결정짓지는 않는다는 뜻
//그 권한에 따라 무엇이 달라지는지는, service에서 정해줌 (controller,service,dao에는 미들웨어는 가져오면 안됨)


const createUSer = async(name,email,password) => {
  return await prisma.$queryRaw(`
  INSERT INTO
    users(
      name,
      email,
      password,
    
    )
    VALUES (
      '${name}',
      //
      //
    )


  `)
}