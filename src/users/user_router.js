const express = require('express');
const userControllers = require('./user_controller');
const userRouter = express.Router();

userRouter.post("/user/registration", userControllers.userRegister);

module.exports = userRouter;