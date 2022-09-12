import express from "express";
import data from './data.js'
import cors from 'cors'


const app = express();
const PORT = 3048;

app.use(express.json());
app.use(cors());


//test
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
