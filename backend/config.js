import dotenv from "dotenv";
const env = dotenv.config(); // parses .env file and stores all variables in process.env

export const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  MAILER_ACCOUNT_NAME: process.env.MAILER_ACCOUNT_NAME,
  MAILER_ACCOUNT_PASSWORD: process.env.MAILER_ACCOUNT_PASSWORD,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
