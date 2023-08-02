const { User } = require("../models");


async function getAllUsers() {
  const allUser = await User.findAll();
  return allUser
};

module.exports = {
  getAllUsers,
};
