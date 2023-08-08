const { Router } = require("express");
const {
  showRequestsController,
  createRequestController,
  deleteRequestController,
} = require("../controllers/request.controller");

const requestsRoutes = Router();

requestsRoutes.get("/:id", showRequestsController);
requestsRoutes.post("/create-request", createRequestController);
requestsRoutes.delete("/:plateId/:userId", deleteRequestController);

module.exports = requestsRoutes;
