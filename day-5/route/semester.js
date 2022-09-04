const express = require("express");
const router = express.Router();
const {index,show,create} = require("../controller/semester")


router
  .route("/")
  .get(index)
  .post(create)

  router
  .route("/:semester")
  .get(show)

  module.exports = router;