async function getOrderHistoryByUserIdController(req, res) {
  try {

  } catch (error) {
    res.status(500).json({ message: `Não foi possível encontrar pedido: ${error}` })
  }
};

module.exports = {
  getOrderHistoryByUserIdController,
};
