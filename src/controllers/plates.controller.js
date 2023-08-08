const { Op } = require('sequelize');
const DiskStorageForPlate = require('../providers/DiskStorageForPlate');
const Plate = require('../models/Plate');
const Ingredient = require('../models/Ingredient');
const Favorite = require('../models/Favorite');
const { saveFile, deleteFile } = require('../Providers/diskStorageForPlate');

async function createPlate(request, response) {
  const data = request.body.data;
  const { title, description, category, ingredients, price } = JSON.parse(data);
  const user_id = request.user.id;
  const imagem = request.file.filename;

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

  return response.status(200).json();
}

async function showPlate(request, response) {
  const { id } = request.params;

  const plate = await Plate.findByPk(id);
  const ingredients = await Ingredient.findAll({ where: { plate_id: id }, order: [['name']] });

  return response.json({
    plate,
    ingredients,
  });
}

async function deletePlate(request, response) {
  const { id } = request.params;

  const plate = await Plate.findByPk(id);

  if (plate.imagem) {
    await deleteFile(plate.imagem);
  }

  await plate.destroy();
  await Favorite.destroy({ where: { id } });

  return response.json();
}

async function indexPlates(request, response) {
  const { title } = request.query;

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

  return response.json(plates.reverse());
}

async function updatePlate(request, response) {
  const plate_id = request.params.id;
  const { title, description, category, price, ingredients } = request.body;

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

  return response.status(200).json();
}

module.exports = {
  createPlate,
  showPlate,
  deletePlate,
  indexPlates,
  updatePlate,
};
