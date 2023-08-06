const [Request] = require("../models");

async function getRequestByUserIdService(id) {
  const getRequest = await Request.findAll({ where: { userId: id } });
  return getRequest;
};

module.exports = {
  getRequestByUserIdService,
};
