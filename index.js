import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const { HTTP_PORT } = process.env;

const api = express();

api.listen(HTTP_PORT, () => {
    console.log(`API running on port http://localhost:${HTTP_PORT}`);
});