import express from 'express';
import router from "./routes"

const app = express()
app.use(express.json())
app.use(router); // Route 에 의존성을 가집니다.

app.use((err, req, res, next) => {
  const { status, message } = err
  console.error(err)
  res.status(status || 500).json({ message })
})

module.exports = app