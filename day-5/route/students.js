const express = require("express");
const router = express.Router();
const {index,show,create,addCourses,addMark} = require("../controller/students")


router
  .route("/")
  .get(index)
  .post(create)

  router
  .route("/:id")
  .get(show)
  .put(addCourses)

  router
  .route("/:id/:course")
  .put(addMark)

  module.exports = router;