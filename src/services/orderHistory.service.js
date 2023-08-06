const { OrderHistory } = "../models";

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

async function updateOrderHistoryService(id, upDateOrder) {
  const getUpdate = await OrderHistory.updateOne({ where: { _id: id } }, { $set: { upDateOrder } });
  return getUpdate;
};

module.exports = {
  getOrderHistoryByUserIdService,
  getOrderByUserIdAndStatus,
  createOrderHistoryService,
  updateOrderHistoryService,
};
