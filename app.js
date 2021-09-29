import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

import utils from './utils';
import { userRoutes, prodRoutes } from './routes';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(express.static(`${__dirname}/public`));

app.use('/products', prodRoutes);
app.use('/users', userRoutes);

app.all('*', (req, res, next) => {
  next(
    new utils.AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(utils.globalErrorHandler);

export default app;
