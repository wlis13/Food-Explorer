const { Router } = require("express");
const {
  searchPlateIdByIngredient,
  getIngredientByPlateId,
  updateIngredientsController,
} = require("../controllers/ingredient.controller");

const ingredientRouter = Router();

ingredientRouter.get("/get-by-name", searchPlateIdByIngredient);
ingredientRouter.get("/get-ingredient-by-plateId/:id", getIngredientByPlateId);
ingredientRouter.post("/update-ingredients/:id", updateIngredientsController);

module.exports = ingredientRouter;