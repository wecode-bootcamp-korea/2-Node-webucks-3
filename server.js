import express from 'express';
import dotenv from 'dotenv';

import router from "./routes"

dotenv.config();

const app = express();
const { PORT } = process.env;
app.use(express.json())

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
