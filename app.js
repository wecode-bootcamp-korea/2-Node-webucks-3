import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';

dotenv.config({ path: './config.env' });

import AppError from './utils/appError.js';
import globalErrorHandler from './utils/globalErrorHandler.js';
import productRouter from './routes/prodRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
// app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use(express.static(`${__dirname}/public`));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
