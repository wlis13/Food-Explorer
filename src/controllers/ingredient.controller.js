const {
  getAllIngredientsByName, getIngredientById,
} = require("../services/ingredients.service");

async function searchPlateIdByIngredient(req, res) {
  try {
    const { name } = req.query;
    const getIngredients = await getAllIngredientsByName(name);
    res.status(200).json(getIngredients);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` });
  }
};

async function getIngredientByPlateId(req, res) {
  try {
    const { id } = req.params;
    const getingredinet = await getIngredientById(id);
    res.status(200).json(getingredinet);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` });
  }
};

module.exports = {
  searchPlateIdByIngredient,
  getIngredientByPlateId,
};
