const indexRoute = require("express").Router();

indexRoute.get("/", (req, res) => {
  res.json("Home Page");
});

const productRoute = require("./productRoute");
indexRoute.use("/product", productRoute);

const userRoute = require("./userRoute");
indexRoute.use("/user", userRoute);

module.exports = indexRoute;

// npx sequelize-cli model:generate --name users --attributes user_name,user_email,user_password,

//
