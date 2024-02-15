const express = require("express");
const userController = require("./../controller/user");
const router = express.Router();

router.post("/ban/:id", userController.banUser);

module.exports = router;
