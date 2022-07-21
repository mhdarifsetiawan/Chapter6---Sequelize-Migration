const express = require("express");
const productRouter = require("./src/product/product.route");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from simple server!");
});

app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
