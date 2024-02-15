const express = require("express");
const movieController = require("./../controller/movie");

const router = express.Router();

router.post("/create", movieController.createMovie);

module.exports = router;
