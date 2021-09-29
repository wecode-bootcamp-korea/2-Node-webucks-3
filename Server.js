import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import app from './app.js';

const PORT = process.env.PORT || 8000;
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
