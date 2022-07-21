const express = require("express");
const userController = require("./user.controller");
const userService = require("./user.service");
const userRouter = express.Router();

// API to get all users
userRouter.get("/users", userController.getAllUsers);

// API to create new user
userRouter.get("/users", async (req, res) => {
  const users = await userRouter.getAllUsers();
  res.json(users);
});

module.exports = userRouter;
