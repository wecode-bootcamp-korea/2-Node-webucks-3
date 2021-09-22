import express from ''
//module로 할 시에 임포트 복잡해진ㄴ 거 해결
//자바스크립트에ㅓㅅ, 하나의 폴더 내에서 index.js라는 이름의 파일이 생기면
//그건 모듈이 아니라 하나의 패키지로 기능
//즉 내가 묶어놓은 거를 한꺼번에 임포트

//index.js

export { alsdf, asdf } 
//userRouter.js
// import userController from '../controllers/asdfasdfasdf'
import { userController } from '../controllers' //services 폴더 자체를 불러오기!!!

// 똑같은 폴더들을 완전 여러번 계속 import export해오는 비효율!!!