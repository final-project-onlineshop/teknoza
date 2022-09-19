import express from "express";
// import data from './data.js'
import cors from "cors";
import path from "path";

// import userRouter from "./routes/userRoutes.js";

import productRouter from "./routes/productRoutes.js";

import "./db-connect.js";
import { config } from "./config.js";

//data schema is ready to use in models ordner..
// we are using as database Mongodb-online.. there is a link for database in .env doc..

const port = config.PORT || 3484;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//test
app.use("/api/products", productRouter);
// app.use("/api/users", userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
