const express = require('express');
const authControllers = require('./auth_controller');
const userAuthentication = express.Router();

userAuthentication.post("/user/auth",authControllers.userLogin);

module.exports = userAuthentication;