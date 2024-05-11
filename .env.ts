import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

type Env = {
  PORT: number
  SALT: number | string
}

export const env: Env = {
  PORT: Number(process.env.PORT),
  SALT: process.env.SALT || 2
}