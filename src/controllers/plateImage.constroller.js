const { Plate } = require("../models");
const { deleteFile, saveFile } = require("../Providers/diskStorageForPlate");

async function updatePlateImage(req, res) {
  const { id } = req.params;
  const imgPlateFilename = req.file.filename;

  const plate = await Plate.findByPk(id);

  if (!plate) {
    res.status(401).json("Ação negada.", 401);
  }

  if (plate.image) {
    await deleteFile(plate.image);
  }

  const filename = await saveFile(imgPlateFilename);
  plate.image = filename;

  await plate.update({ image: plate.image });

  res.status(201).json(plate);
}

module.exports = updatePlateImage;
