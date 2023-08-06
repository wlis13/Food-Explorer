const {
  createOrderHistoryService,
  getOrderByUserIdAndStatus,
  getAllOrderHistoryService,
  updateOrderHistoryService,
} = require("../services/orderHistory.service");
const { getRequestByUserIdService } = require("../services/request.service");

async function getOrderHistoryByUserIdController(req, res) {
  try {
    const userId = req.params.id;
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
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
};

async function indexOrderHistoryController(req, res) {
  try {
    const userId = req.params.id;
    const getOrderByUserId = await getOrderByUserIdAndStatus(userId);
    getOrderByUserId.reverse();
    res.status(200).json(getOrderByUserId);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
};

async function showOrderHistoryController(_req, res) {
  try {
    const getAllOrder = await getAllOrderHistoryService();
    getAllOrder.reverse();
    res.status(200).json(getAllOrder);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
};

async function updateOrderHistoryController(req, res) {
  try {
    const { id, status } = req.body;
    const getUpdate = await updateOrderHistoryService(id, status);
    res.status(201).json(getUpdate);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
};

module.exports = {
  getOrderHistoryByUserIdController,
  indexOrderHistoryController,
  showOrderHistoryController,
  updateOrderHistoryController,
};
