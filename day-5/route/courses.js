const express = require("express");
const router = express.Router();
const catchAsync = require("../catchAsync");
const {index,show,create,update} = require("../controller/courses")


router
  .route("/")
  .get(catchAsync(index))
  .post(catchAsync(create))

  router
  .route("/:course")
  .get(catchAsync(show))
  .put(catchAsync(update))


  module.exports = router;
  