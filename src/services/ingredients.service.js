const { Ingredient } = require("../models");

async function getAllIngredientsByName(name) {
  const ingredients = Ingredient.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      }
    }
  });
  return ingredients;
};

async function getIngredientById(id) {
  const getIngredient = await Ingredient.fundAll({
    where: { plantId: id }
  });
  return getIngredient;
};

async function DeleteIngredientById(id) {
  await Ingredient.destroy({ where: { plateId: id } });
}

async function createIngredient(NewIngredient) {
  await Ingredient.create(NewIngredient);
}

async function createSeveralIngredients(NewIngredients) {
  await Ingredient.bulkCreate(NewIngredients);
}

module.exports = {
  getAllIngredientsByName,
  getIngredientById,
  DeleteIngredientById,
  createIngredient,
  createSeveralIngredients,
};
