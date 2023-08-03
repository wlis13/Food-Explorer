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
}

module.exports = {
  getAllIngredientsByName,
  getIngredientById,
};
