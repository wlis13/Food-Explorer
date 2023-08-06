const { OrderHistory } = "../models";

async function getOrderHistoryByUserIdService(id) {
  const getOrder = await OrderHistory.findAll({ where: { userId: id } });
  return getOrder;
};

module.exports = {
  getOrderHistoryByUserIdService,
};
