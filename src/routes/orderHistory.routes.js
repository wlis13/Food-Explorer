const { Router } = require("express");
const {
  getOrderHistoryByUserIdController,
  indexOrderHistoryController,
} = require("../controllers/orderHistory.controller");

const orderHistoryRouter = Router();

orderHistoryRouter.get("/get-order-userId/:id", getOrderHistoryByUserIdController);
orderHistoryRouter.get("/get-order-index-status/:id", indexOrderHistoryController);

module.exports = orderHistoryRouter;
