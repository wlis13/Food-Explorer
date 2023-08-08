const { Op } = require('sequelize');
const { Plate, Ingredient, Favorite } = require("../models");
const { saveFile, deleteFile } = require('../Providers/diskStorageForPlate');

async function createPlate(req, res) {
  const data = req.body.data;
  const { title, description, category, ingredients, price } = JSON.parse(data);
  const user_id = req.user.id;
  const imagem = req.file.filename;

  const filename = await saveFile(imagem);

  const plate = await Plate.create({
    title,
    imagem: filename,
    description,
    category,
    price,
    user_id,
  });

  const ingredientsInsert = ingredients.map((name) => {
    return {
      plate_id: plate.id,
      name,
      user_id,
    };
  });

  await Ingredient.bulkCreate(ingredientsInsert);

  return res.status(200).json();
}

async function showPlate(req, res) {
  const { id } = req.params;

  const plate = await Plate.findByPk(id);
  const ingredients = await Ingredient.findAll({ where: { plate_id: id }, order: [['name']] });

  return res.json({
    plate,
    ingredients,
  });
}

async function deletePlate(req, res) {
  const { id } = req.params;

  const plate = await Plate.findByPk(id);

  if (plate.imagem) {
    await deleteFile(plate.imagem);
  }

  await plate.destroy();
  await Favorite.destroy({ where: { id } });

  return res.json();
}

async function indexPlates(req, res) {
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

  return res.json(plates.reverse());
}

async function updatePlate(req, res) {
  const plate_id = req.params.id;
  const { title, description, category, price, ingredients } = req.body;

  const plate = await Plate.findByPk(plate_id);

  if (!plate) {
    throw new AppError('Prato não encontrado');
  }

  const saveId = await Favorite.findOne({ where: { id: plate_id } });

  if (saveId) {
    await Favorite.destroy({ where: { id: plate_id } });

    await Favorite.create({
      id: plate_id,
      title,
      category,
      description,
      price,
      user_id: saveId.user_id,
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
  createPlate,
  showPlate,
  deletePlate,
  indexPlates,
  updatePlate,
};
