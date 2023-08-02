const { getAllUsers } = require("../services/user.service");

async function allUserController(req, res) {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível encontrar usuários: ${error}` })
  }
};

module.exports = {
  allUserController,
};
