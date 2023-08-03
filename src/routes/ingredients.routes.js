const { Router } = require("express");
const {
  searchPlateIdByIngredient,
  getIngredientByPlateId,
} = require("../controllers/ingredient.controller");

const ingredientRouter = Router();

ingredientRouter.get("/get-by-name", searchPlateIdByIngredient);
ingredientRouter.get("/get-ingredient-by-plateId/:id", getIngredientByPlateId);

module.exports = ingredientRouter;