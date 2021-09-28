import express from "express";
import { usersController } from "../controllers";

const router = express();

//  유저 정보 얻기
router.get("/", usersController.getAllUser);
// 유저 로그인 및 회원가입
router.post("/login", usersController.loginUser);
router.post("/register", usersController.createUser);
// 유저 회원정보 변경
// router.patch("/update", usersController.updateUser);
// 유저 회원정보 삭제
// router.delete("/delete", usersController.deleteUser);

module.exports = router;
