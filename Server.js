import express from 'express';
import dotenv from 'dotenv';
import route from './routes/user.js';
import routeProd from './routes/products.js';
import routeCategory from './routes/categories.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = 8000 | process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, I am working!');
});

app.use('/api/user', route);
app.use('/api/products', routeProd);
app.use('/api/categories', routeCategory);

app.listen(PORT, () => console.log(`server on ${PORT}`));
