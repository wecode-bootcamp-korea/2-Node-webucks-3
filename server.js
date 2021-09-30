import dotenv from 'dotenv';
import app from "./app";

dotenv.config();

const { PORT } = process.env;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
