const { Op } = require('sequelize');
const { Plate, Ingredient, Favorite } = require("../models");
const { saveFile, deleteFile } = require('../Providers/diskStorageForPlate');

async function createPlateController(req, res) {
  const data = req.body.data;
  const { title, description, category, ingredients, price } = JSON.parse(data);
  const userId = req.user.id;
  const imagem = req.file.filename;

  const filename = await saveFile(imagem);

  const plate = await Plate.create({
    title,
    imagem: filename,
    description,
    category,
    price,
    userId,
  });

  const ingredientsInsert = ingredients.map((name) => {
    return {
      plateId: plate.id,
      name,
      userId,
    };
  });

  await Ingredient.bulkCreate(ingredientsInsert);

  return res.status(200).json();
}

async function showPlateController(req, res) {
  const { id } = req.params;

  const plate = await Plate.findByPk(id);
  const ingredients = await Ingredient.findAll({ where: { plateId: id }, order: [['name']] });

  return res.status(201).json({
    plate,
    ingredients,
  });
}

async function deletePlateController(req, res) {
  const { id } = req.params;

  const plate = await Plate.findByPk(id);

  if (plate.image) {
    await deleteFile(plate.image);
  }

  await plate.destroy();
  await Favorite.destroy({ where: { id } });

  const messageResponse = "Prato foi removido com sucesso!";
  return res.status(204).json(messageResponse);
}

async function indexPlatesController(req, res) {
  const { title } = req.query;

  let plates;

  if (title) {
    plates = await Plate.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${title}%`,
            },
          },
          {
            ingredients: {
              [Op.like]: `%${title}%`,
            },
          },
        ],
      },
      order: [['title']],
    });
  } else {
    plates = await Plate.findAll({ order: [['favorited']] });
  }

  return res.status(200).json(plates.reverse());
}

async function updatePlateController(req, res) {
  const plateId = req.params.id;
  const { title, description, category, price, ingredients } = req.body;

  const plate = await Plate.findByPk(plateId);

  if (!plate) {
    res.status(401).json('Prato não encontrado');
  }

  const saveId = await Favorite.findOne({ where: { plateId } });

  if (saveId) {
    await Favorite.destroy({ where: { plateId } });

    await Favorite.create({
      id: plateId,
      title,
      category,
      description,
      price,
      userId: saveId.userId,
    });
  }

  plate.title = title ?? plate.title;
  plate.description = description ?? plate.description;
  plate.category = category ?? plate.category;
  plate.price = price ?? plate.price;
  plate.ingredients = ingredients ?? plate.ingredients;

  await plate.save();

  return res.status(200).json();
}

module.exports = {
  createPlateController,
  showPlateController,
  deletePlateController,
  indexPlatesController,
  updatePlateController,
};
