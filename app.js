import cookieParser from "cookie-parser";
import express from "express";
import routes from "./routes";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

module.exports = app;
