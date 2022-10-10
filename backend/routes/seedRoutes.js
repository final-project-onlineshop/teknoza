import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  data.products.forEach((product) => {
    if (product.reviews.length === 0) product.averageRating = 0;
    else {
      const averageRating =
        product.reviews.reduce((acc, review) => (acc += review.rating), 0) /
        product.reviews.length;
      product.averageRating = Math.ceil(averageRating * 100) / 100;
    }
  });
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
