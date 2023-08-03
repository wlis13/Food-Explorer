const { hash } = require("bcryptjs");
const { getAllUsers, getOneUser, createUserService } = require("../services/user.service");

async function allUserController(_req, res) {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível encontrar usuários: ${error}` })
  }
};

async function createUserController(req, res) {
  try {
    const { name, password, email, admin } = req.body;
    const getUser = await getOneUser(email);

    if (getUser) {
      res.status(401).json("Usuário já existe!");
      return;
    }

    const hashPassword = hash(password, 8)
    const generateNewUser = {
      name,
      email,
      hashPassword,
      admin
    }
    const createdUser = await createUserService(generateNewUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível cadastrar usuário: ${error}` });
  }
};

module.exports = {
  allUserController,
  createUserController
};
