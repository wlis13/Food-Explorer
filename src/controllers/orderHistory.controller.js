const { createOrderHistoryService } = require("../services/orderHistory.service");
const { getRequestByUserIdService } = require("../services/request.service");

async function getOrderHistoryByUserIdController(req, res) {
  try {
    const userId = req.params;
    const getRequest = await getRequestByUserIdService(userId);
    let newOrderHistoryDetails = [];

    getRequest.map((item) => {
      newOrderHistoryDetails.push(`${item.amount} X ${item.title}`)
    });

    let details = newOrderHistoryDetails.join(", ");
    const createNewObject = {
      details,
      userId
    }

    const getCreatedNewOrder = await createOrderHistoryService(createNewObject);
    res.status(201).json(getCreatedNewOrder);

  } catch (error) {
    res.status(500).json({ message: `Não foi possível encontrar pedido: ${error}` })
  }
};

module.exports = {
  getOrderHistoryByUserIdController,
};
