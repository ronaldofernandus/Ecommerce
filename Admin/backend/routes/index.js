const indexRoute = require("express").Router();

indexRoute.get("/home", (req, res) => {
  res.json("Home Page");
});

const productRoute = require("./productRoute");
indexRoute.use("/product", productRoute);

const userRoute = require("./userRoute");
indexRoute.use("/", userRoute);

const imageRoute = require("./imageRoute");
indexRoute.use("/images", imageRoute);

const orderRoute = require("./orderRoute");
indexRoute.use("/order", orderRoute);

const line_itemRoute = require("./line_itemRoute");
indexRoute.use("/line", line_itemRoute);

const shopRoute = require("./shopRoute");
indexRoute.use("/shop", shopRoute);

module.exports = indexRoute;
