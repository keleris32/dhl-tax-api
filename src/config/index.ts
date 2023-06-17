import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, MONGODB_URI, PORT, DB } = process.env;

const env = NODE_ENV || 'development';

export default {
  env,
  MONGODB_URI,
  PORT,
  DB,
};
