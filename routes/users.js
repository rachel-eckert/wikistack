const express = require("express");
const userRouter = express.Router();
//const index = require("../views/index")

userRouter.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next()
})

module.exports = userRouter
