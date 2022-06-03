const imageRoute = require("express").Router();
const imageController = require("../controller/imageController");

const authentication = require("../middleware/tokenMiddleWare");
const upload = require("../middleware/multer");

imageRoute.get("/", imageController.getImage);
imageRoute.post(
  "/add",

  upload.array("image"),

  // upload.array("image"),
  // (req, res) => {
  //   let arrayUrl = [];
  //   let finalImageUrl =
  //     req.protocol + "://" + req.get("host") + "/image" + rezq.files.filename;

  //   Array.from(finalImageUrl).forEach((finalImageUrl) => {
  //     arrayUrl.push({ image: finalImageUrl });
  //   });
  // },

  imageController.postImage
);
imageRoute.put("/:id", authentication, imageController.updateImage);
imageRoute.delete("/:id", authentication, imageController.deleteImage);
imageRoute.get("/:id", authentication, imageController.getImageById);

module.exports = imageRoute;

// console.log(req.files.filename);
// console.log(req.files);
// Array.from(finalImageUrl).forEach((finalImageUrl) => {
//   res.json({ status: "succes", image: finalImageUrl });
// });
