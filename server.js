import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello HI');
});

app.post('/categories', async (req, res)=> {
  await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES ("새로운 커피 카테고리");
  `;
})

app.listen(PORT, () => console.log(`server on ${PORT}`));
