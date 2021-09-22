//router는 controller에 명령을 내려야 한다

import express from 'express'
import userController from '../ans-controllers/ans-userController-module'



const router = express.Router();

router.get('./user',userController.그안에함수)
router.post('./user,',userController.그안에함수)

export default router; //아하 이렇게 그냥 변수를!! 