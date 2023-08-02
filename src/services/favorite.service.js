const { Favorite } = require("../models");


async function getFavorites() {
  const allUser = await Favorite.findAll();
  return allUser
};

module.exports = {
  getFavorites,
};
