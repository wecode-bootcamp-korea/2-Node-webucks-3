const express = require("express");
const routes = require("./routes");
// const looger = require("morgan")("dev")

// const cors = require("cors");
const app = express();

app.use(express.json());
// app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

module.exports = app;
