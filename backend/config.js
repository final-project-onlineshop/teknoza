import dotenv from "dotenv";
const env = dotenv.config(); // parses .env file and stores all variables in process.env

console.log("Loaded Env Config:", env);

export const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMIAN: process.env.MAILGUN_DOMIAN,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  FRONTEND_BASE_URL:process.env.FRONTEND_BASE_URL
};
