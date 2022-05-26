const indexRoute = require("express").Router();

indexRoute.get("/", (req, res) => {
  res.json("Home Page");
});

const productRoute = require("./productRoute");
indexRoute.use("/product", productRoute);

const userRoute = require("./userRoute");
indexRoute.use("/user", userRoute);

const imageRoute = require("./imageRoute");
indexRoute.use("/images", imageRoute);

const orderRoute = require("./orderRoute");
indexRoute.use("/order", orderRoute);

module.exports = indexRoute;
