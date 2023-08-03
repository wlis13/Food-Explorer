const { User } = require("../models");


async function getAllUsers() {
  const allUser = await User.findAll();
  return allUser
};

async function getOneUser(email) {
  const getUser = await User.findOne({ where: { email: email } });
  return getUser;
}

async function createUserService(newUser) {
  const getCreateUser = await User.create(newUser);
  return getCreateUser;
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUserService,
};
