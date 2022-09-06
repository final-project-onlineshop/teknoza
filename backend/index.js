import express from "express";

const app = express();
const PORT = 3048;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hallo from server");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
