const { compare } = require("bcryptjs");
const { getOneUser } = require("../services/user.service");
const { sign } = require("jsonwebtoken");
require('dotenv').config();

const secret = process.env.SECRET || "default";

async function authenticateUserController(req, res) {
  try {
    const { email, password } = req.body;
    const getUser = await getOneUser(email);

    if (!getUser) {
      res.status(401).json({ message: "Usuários não encontrado!" });
      return;
    }
    const verifyPassword = compare(password, getUser.passoword);

    if (!verifyPassword) {
      res.status(401).json({ message: "Password incorreto!" });
      return;
    }

    const token = sign({}, secret, {
      subject: String(getUser.id),
      expiresIn: '24h'
    })

    res.status(200).json({ ...getUser, token });
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` });
  }
};

module.exports = {
  authenticateUserController,
};
