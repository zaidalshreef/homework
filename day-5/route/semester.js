const express = require("express");
const router = express.Router();
const {index,show,create} = require("../controller/semester")


router
  .route("/semesters")
  .get(index)
  .post(create)

  router
  .route("/semesters/:semester")
  .get(show)

  module.exports = router;