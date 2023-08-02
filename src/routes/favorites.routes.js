const { Router } = require("express");
const { createController, removeController, indexController } = require("../controllers/favorites.controller");

const favoritesRoutes = Router();


favoritesRoutes.post("/create-favorite", createController);
favoritesRoutes.delete("/remove-favorite/:id/:userId", removeController);
favoritesRoutes.get("/index/:userId", indexController);

module.exports = favoritesRoutes;