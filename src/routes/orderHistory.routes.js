const { Router } = require("express");
const {
  getOrderHistoryByUserIdController,
  indexOrderHistoryController,
  showOrderHistoryController,
  updateOrderHistoryController,
} = require("../controllers/orderHistory.controller");

const orderHistoryRouter = Router();

orderHistoryRouter.get("/get-all-orders", showOrderHistoryController);
orderHistoryRouter.get("/get-order-userId/:id", getOrderHistoryByUserIdController);
orderHistoryRouter.get("/get-order-index-status/:id", indexOrderHistoryController);
orderHistoryRouter.post("/update-order-status", updateOrderHistoryController);

module.exports = orderHistoryRouter;
