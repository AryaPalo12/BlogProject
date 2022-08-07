const express = require('express');
const verifyToken = require('../middleware/token.verification');
const postControllers = require('./post_controller');
const postRouter = express.Router();

postRouter.get("/user/posts/:postId?",verifyToken,postControllers.getPost);

postRouter.post("/user/posts",verifyToken,postControllers.createPost)

postRouter.put("/user/posts/:postId",verifyToken,postControllers.updatePost)

module.exports = postRouter;