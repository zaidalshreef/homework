const express = require("express");
const router = express.Router();
const {index,show,create,update} = require("../controller/courses")


router
  .route("/")
  .get(index)
  .post(create)

  router
  .route("/:course")
  .get(show)
  .put(update)


  module.exports = router;
  