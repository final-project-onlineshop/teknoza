import express from "express";
import data from './data.js';
import cors from 'cors';
const app = express();
const PORT = 3048;
app.use(express.json());
app.use(cors());
const monitor = {
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
};
console.log(monitor);
//test
app.get("/api/products", (req, res) => {
    res.send(data.products);
});
app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});
