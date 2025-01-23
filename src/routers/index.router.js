import express from 'express';
import userRouter from './user.router.js';
import dotenv from 'dotenv';

dotenv.config();
const { REST_API_ROUTE_BASE_PATH } = process.env;

const router = express.Router();

router.use(`${REST_API_ROUTE_BASE_PATH}/user`, userRouter);

export default router;