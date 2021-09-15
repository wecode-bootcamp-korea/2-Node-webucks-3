import express from 'express';

const app = express();
const PORT = 8000 | process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, err => {
  try {
    console.log(`Server is running on ${PORT}`);
    throw new Error('Server is not ok');
  } catch (e) {
    console.error(e);
  }
});
