const { Router } = require('express');
const {
  allUserController, createUserController,
} = require('../controllers/user.controller');
const { authenticateUserController } = require('../controllers/authentication.controller');

const userRouter = Router();

userRouter.get("/", allUserController);
userRouter.post("/create-user", createUserController);
userRouter.post("/authencicate-user", authenticateUserController);

module.exports = userRouter;
