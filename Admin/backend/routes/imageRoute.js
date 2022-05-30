const imageRoute = require("express").Router();
const imageController = require("../controller/imageController");

const authentication = require("../middleware/tokenMiddleWare");
const upload = require("../middleware/multer");

imageRoute.get("/", imageController.getImage);
imageRoute.post(
  "/add",
  authentication,
  upload.single("image"),
  // (req, res) => {
  //   let finalImageUrl =
  //     req.protocol + "://" + req.get("host") + "/image/" + req.file.filename;
  //   res.json(finalImageUrl);
  // },

  imageController.postImage
);
imageRoute.put("/:id", authentication, imageController.updateImage);
imageRoute.delete("/:id", authentication, imageController.deleteImage);
imageRoute.get("/:id", authentication, imageController.getImageById);

module.exports = imageRoute;