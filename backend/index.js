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

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find(x => x.slug === req.params.slug);
  if(product) {
      res.send(product);
  } else {
      res.status(404).send({ message: 'Product Not Found' })    
  }
});


app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
