import express from 'express';

import {NODE_ENV, PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';

import authRouter from './routes/auth.routes.js';

import subscriptionRouter from './routes/subscription.routes.js';

import connectToDatabase from './database/mongodp.js';

import errorMiddleware from './middlewares/error.middleware.js';

import cookieParser from 'cookie-parser';

import arcjetMiddleware from './middlewares/arcjet.middleware.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth' , authRouter);

app.use('/api/v1/user' , userRouter);

app.use('/api/v1/subscriptions' , subscriptionRouter);

app.use(errorMiddleware)
app.listen(PORT,async() => {
  console.log(`API running on port ${PORT} in ${NODE_ENV} mode`);
  await connectToDatabase();
});

export default app;

