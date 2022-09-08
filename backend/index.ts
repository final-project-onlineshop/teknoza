import express from "express";
import data from './data.js'
import cors from 'cors'


const app = express();
const PORT = 3048;

app.use(express.json());
app.use(cors());

//ts test
interface IProduct{
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
}
const monitor: IProduct={
  name: "HP Curved Monitor",
  slug: "hp-curved-monitor",
  category: "Monitors",
  image: "/images/monitor1.jpg",
  price: 150,
  countInStock: 10,
  brand: "HP",
  rating: 3.5,
  numReviews: 43,
  description: "Eye-friendly Monitor",
}
console.log(monitor);

//test
app.get("/api/products", (req:express.Request, res:express.Response) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
