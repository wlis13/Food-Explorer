const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../upload/upload");
const updatePlateImage = require("../controllers/plateImage.constroller");
const {
  indexPlatesController,
  createPlateController,
  showPlateController,
  deletePlateController,
  updatePlateController,
} = require("../controllers/plates.controller");

const plateRouter = Router();
const upload = multer(uploadConfig.MULTER_PLATE);

plateRouter.get("/all-plates", indexPlatesController);
plateRouter.post("/insert-plate", upload.single("imgPlate"), createPlateController);
plateRouter.get("/plate-by-id/:id", showPlateController);
plateRouter.delete("/delete-plate/:id", upload.single("imgPlate"), deletePlateController);
plateRouter.put("/update-plate", updatePlateController);

plateRouter.patch("/:id", upload.single("imgPlate"), updatePlateImage);
module.exports = plateRouter;
