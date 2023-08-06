const { OrderHistory } = "../models";

async function getAllOrderHistoryService() {
  const getOrder = await OrderHistory.findAll({ order: [['status', 'ASC']] });
  return getOrder;
}

async function getOrderHistoryByUserIdService(id) {
  const getOrder = await OrderHistory.findAll({ where: { userId: id } });
  return getOrder;
};

async function getOrderByUserIdAndStatus(userId) {
  const getOrder = await OrderHistory.findAll({
    where:
      { userId }, order: [['status', 'ASC']]
  });
  return getOrder;
};

async function createOrderHistoryService(newOrder) {
  const getCreateOrder = await OrderHistory.create(newOrder);
  return getCreateOrder;
};

async function updateOrderHistoryService(id, status) {
  const getUpdate = await OrderHistory.update({ status }, { where: { id: id } });
  return getUpdate;
};

module.exports = {
  getAllOrderHistoryService,
  getOrderHistoryByUserIdService,
  getOrderByUserIdAndStatus,
  createOrderHistoryService,
  updateOrderHistoryService,
};
