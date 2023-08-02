const { Favorite, Plate } = require("../models");

async function createController(_req, res) {
  try {
    const { title, category, description, price, image, userId, plateId } = request.body;

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
    } else {
      await Favorite.create({
        title,
        image,
        category,
        description,
        price,
        id: plateId,
        userId,
      });

      await Plate.update({ favorited: currentValue + 1 }, {
        where: { id: plateId },
      });
    }
    res.status(200).json();
  } catch (error) {
    console.log
    response.status(500).json({ error: "Internal server error" });
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

async function removeController(request, response) {
  try {
    const id = request.params.id;
    const user_id = request.params.user_id;

    await Favorite.destroy({
      where: { user_id, id },
    });

    const plate = await Plate.findOne({
      where: { id },
    });

    let currentValue = plate.favorited;

    await Plate.update({ favorited: currentValue - 1 }, {
      where: { id },
    });

    response.json();
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createController,
  indexController,
  removeController,
};
