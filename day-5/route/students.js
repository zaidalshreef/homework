const express = require("express");
const router = express.Router();
const {index,show,create,addCourses,addMark} = require("../controller/students")


router
  .route("/students")
  .get(index)
  .post(create)

  router
  .route("/students/:id")
  .get(show)
  .put(addCourses)

  router
  .route("/students/:id/:course")
  .put(addMark)