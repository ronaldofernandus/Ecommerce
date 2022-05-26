const imageRoute = require("express").Router();
const imageController = require("../controller/imageController");

const authentication = require("../middleware/tokenMiddleWare");
const upload = require("../middleware/multer");

imageRoute.get("/", imageController.getImage);
imageRoute.post(
  "/add",
  authentication,
  // upload.single("image"),
  // (req, res) => {
  //   console.log(req.file);
  //   res.send("succes");
  // },

  imageController.postImage
);
imageRoute.put("/:id", authentication, imageController.updateImage);
imageRoute.delete("/:id", authentication, imageController.deleteImage);
imageRoute.get("/:id", authentication, imageController.getImageById);

module.exports = imageRoute;
