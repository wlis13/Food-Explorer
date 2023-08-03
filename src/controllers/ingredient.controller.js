const {
  getAllIngredientsByName, getIngredientById, DeleteIngredientById, createSeveralIngredients,
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

async function updateIngredientsController(req, res) {
  try {
    const userId = req.getUser.id;
    const plateId = req.params.id;
    const { ingredients } = req.body;
    await DeleteIngredientById(plateId);

    const insertIngredient = ingredients.map((ingredient) => {
      return {
        ingredient,
        plateId,
        userId
      }
    });

    if (insertIngredient.length > 0) {
      await createSeveralIngredients(insertIngredient);
      res.status(201).json({ message: "Ingredientes atualizados com sucesso!" });
      return;
    } else {
      res.status(401).json({ message: "Não foram encontrados valores na requisiçaõ." });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` });
  }
}

module.exports = {
  searchPlateIdByIngredient,
  getIngredientByPlateId,
  updateIngredientsController,
};
