const express = require("express");
const router = express.Router();
const catchAsync = require("../catchAsync");
const {index,show,create} = require("../controller/semester")


router
  .route("/")
  .get(catchAsync(index))
  .post(catchAsync(create))

  router
  .route("/:semester")
  .get(catchAsync(show))

  module.exports = router;