const fs = require("fs/promises");
const path = require("path");
const uploadConfig = require("../upload/upload");

async function saveFile(file) {
  const sourcePath = path.resolve(uploadConfig.TMP_FOLDER_PLATE, file);
  const destinationPath = path.resolve(uploadConfig.UPLOADS_FOLDER_PLATE, file);

  await fs.rename(sourcePath, destinationPath);
  return file;
}

async function deleteFile(file) {
  const filePathPlates = path.resolve(uploadConfig.UPLOADS_FOLDER_PLATE, file);

  try {
    await fs.stat(filePathPlates);
  } catch {
    return;
  }
  await fs.unlink(filePathPlates);
}

module.exports = {
  saveFile,
  deleteFile,
};
