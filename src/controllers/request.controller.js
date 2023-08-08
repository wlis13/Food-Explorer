const { Request, Plate } = require("../models");

async function createRequestController(req, res) {
  const { title, description, price, category, amount, plateId, userId } = req.body;

  const [checkIfExist] = await Request.findAll({
    where: { plateId, userId },
  });

  const plate = await Plate.findByPk(plateId);

  if (checkIfExist) {
    await checkIfExist.update({ amount });
    res.status(201).json(`Solicitação: ${title}, atualizada com sucesso!`);
  } else {
    await Request.create({
      title,
      description,
      price,
      category,
      amount,
      plateId,
      userId,
      image: plate.image,
    });
    res.status(201).json(`Solicitação: ${title}, criada com sucesso!`);
  }
}

async function showRequestsController(req, res) {
  const userId = req.params.id;
  const requests = await Request.findAll({
    where: { userId },
  });

  return res.status(200).json(requests);
}

async function deleteRequestController(req, res) {
  const { userId, plateId } = req.params;

  const deleteOptions = { where: { userId } };

  if (plateId !== "0") {
    deleteOptions.where.plateId = plateId;
  }

  await Request.destroy(deleteOptions);

  return res.status(204).json(``);
}

module.exports = {
  createRequestController,
  showRequestsController,
  deleteRequestController,
};
