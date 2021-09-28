import http from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const server = http.createServer(app);
const { PORT } = process.env;

const startServer = async () => {
  try {
    server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  } finally {
    // await prisma.$disconnect;
  }
};
startServer();

// 우선은 미들웨어를 등록해주는 메서드라고 알고 있자
// '/'에게 routes라고 하는 미들웨어를 적용하겠다는 의미
// 1. 추각코때 공부할 키워드 : app.use( )
