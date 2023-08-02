const { Router } = require('express');
const {
  allUserController,
} = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get("/", allUserController);

module.exports = userRouter;
