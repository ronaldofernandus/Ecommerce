const indexRoute = require("express").Router();

// const homeController = require("../controller/homeController");

indexRoute.get("/", (req, res) => {
  res.json("Test");
});

// const postingRoute = require("./postingRoute");
// indexRoute.use("/posting", postingRoute);

// const userRoute = require("./userRoute");
// indexRoute.use("/user", userRoute);

module.exports = indexRoute;

// npx sequelize-cli model:generate --name users --attributes user_name,user_email,user_password,


// 