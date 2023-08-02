const { Router } = require("express");
const { createController, removeController, indexController } = require("../controllers/favorites.controller");

const favoritesRoutes = Router();


favoritesRoutes.post("/create/:id", createController);
favoritesRoutes.delete("/:id/:user_id", removeController);
favoritesRoutes.get("/index/:userId", indexController);

module.exports = favoritesRoutes;