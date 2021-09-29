import http from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const server = http.createServer(app);
const { PORT } = process.env;

const startServer = async (req, res) => {
  try {
    server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (error) {
    res.status(500).send(error);
  } finally {
    // await prisma.$disconnect;
  }
};
startServer();
