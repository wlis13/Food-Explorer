const { Favorite, Plate } = require("../models");

async function createController(req, res) {
  try {
    const { title, category, description, price, image, userId, plateId } = req.body;

    const checkExist = await Favorite.findOne({
      where: { userId, id: plateId },
    });

    const plate = await Plate.findOne({
      where: { id: plateId },
    });

    let currentValue = plate.favorited;

    if (checkExist) {
      await Favorite.destroy({
        where: { userId, id: plateId },
      });

      await Plate.update({ favorited: currentValue - 1 }, {
        where: { id: plateId },
      });
    }
    const getCreate = await Favorite.create({
      title,
      image,
      category,
      description,
      price,
      plateId,
      userId,
    });

    await Plate.update({ favorited: currentValue + 1 }, {
      where: { id: plateId },
    });
    res.status(200).json(getCreate);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
}

async function indexController(req, res) {
  try {
    const { title } = req.query;
    const userId = req.params.userId;

    let plateFavorite;

    if (title) {
      plateFavorite = await Favorite.findAll({
        where: { userId },
        include: {
          model: Plate,
          where: {
            title: { [Sequelize.Op.like]: `%${title}%` },
          },
        },
        order: [["title", "ASC"]],
      });
    } else {
      plateFavorite = await Favorite.findAll({
        where: { userId },
        include: Plate,
        order: [["title", "ASC"]],
      });
    }
    res.status(200).json(plateFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
}

async function removeController(req, res) {
  try {
    const id = req.params.id;
    console.log(id)
    const userId = req.params.userId;
    console.log(userId)

    await Favorite.destroy({
      where: { userId, id },
    });

    const plate = await Plate.findOne({
      where: { id },
    });

    let currentValue = plate.favorited;

    await Plate.update({ favorited: currentValue - 1 }, {
      where: { id },
    });

    res.status(204).json({ message: "favorito foi excluído com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
}

module.exports = {
  createController,
  indexController,
  removeController,
};
