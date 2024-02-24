const express = require("express");
const commentController = require("./../controller/comment");
const authMiddleware = require("./../middleware/auth");

const router = express.Router();

router.route("/").post(authMiddleware, commentController.create);

module.exports = router;
