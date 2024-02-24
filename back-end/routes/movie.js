const express = require("express");
const movieController = require("./../controller/movie");
const authMiddleware = require("./../middleware/auth");
const isAdminMiddleware = require("./../middleware/isAdmin");

const router = express.Router();

router.route("/:title").get(movieController.getOne);

router
  .route("/create")
  .post(authMiddleware, isAdminMiddleware, movieController.createMovie);

module.exports = router;
