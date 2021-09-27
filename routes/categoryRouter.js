//router 세부파일들에선, express를 왜 매번 임포트해줘야 하지? index.js에서만 하면 안됨?
//아하 router객체 만들어줘야 하니까

import express from 'express';
import categoryController from '../controllers/categoryController'
//app.get 대신 router.get해준다 (뭐가 다르지?) //최상단 express 객체는, router객체 형성하는 router() 메소드 내장 //router객체는 미들웨어+라우트 기능하는 작은app...
console.log('>>>>>>categoryController')
console.log(categoryController)


const categoryRouter = express.Router();

// 🍀 categories엔드포인트에서, get메소드로 요청할 때
//4.router(엔드포인트 분기) ...express.Router() 안쓰고 express()로 쓴 상태
categoryRouter.get('/products/categories', categoryController.getCategory);

console.log('>>>>>>categoryRouter')
console.log(categoryRouter)
//메소드를 더해준, (파일스코프모듈인?)router객체를 내보내기
//module.exports객체에 대해 새로운 메소드를 정의해주며 변경가한 게 반영되었다는 전제...(반영 과연?)
export default categoryRouter;

console.log(module.exports)
//추후 index.js에서 alias 붙여줄 것임