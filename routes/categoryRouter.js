import express from 'express';
import categoryController from '../controllers/categoryController'

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getCategory);
//메소드를 더해준, (파일스코프모듈인?)router객체를 내보내기
//module.exports객체에 대해 새로운 메소드를 정의해주며 변경가한 게 반영되었다는 전제...(반영 과연?)
export default categoryRouter;