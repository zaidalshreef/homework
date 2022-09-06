const express = require("express");
const router = express.Router();
const catchAsync = require("../catchAsync");
const {index,show,create,addCourses,addMark} = require("../controller/students")


router
  .route("/")
  .get(catchAsync(index))
  .post(catchAsync(create))

  router
  .route("/:id")
  .get(catchAsync(show))
  .put(catchAsync(addCourses))

  router
  .route("/:id/:course")
  .put(catchAsync(addMark))

  module.exports = router;