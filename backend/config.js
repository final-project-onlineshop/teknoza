import dotenv from "dotenv";
const env = dotenv.config(); // parses .env file and stores all variables in process.env

console.log("Loaded Env Config:", env);

export const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  SAFE_ORIGIN_CODE: process.env.SAFE_ORIGIN_CODE,
};
