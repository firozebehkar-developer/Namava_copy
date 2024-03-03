const express = require("express");
const commentController = require("./../controller/comment");
const authMiddleware = require("./../middleware/auth");
const isAdminMiddleware = require("./../middleware/isAdmin");

const router = express.Router();

router.route("/").post(authMiddleware, commentController.create);

router
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, commentController.remove);

module.exports = router;
