import express from 'express';

import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';

import authRouter from './routes/auth.routes.js';

import subscriptionRouter from './routes/subscription.routes.js';

import connectToDatabase from './database/mongodp.js';

const app = express();
app.use(express.json());

app.use('/api/v1/auth' , authRouter);

app.use('/api/v1/user' , userRouter);

app.use('/api/v1/subscriptions' , subscriptionRouter);

app.listen(PORT,async() => {
  console.log(`API running on port ${PORT}`);
  await connectToDatabase();
});

export default app;

