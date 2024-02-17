const express = require("express");
const userController = require("./../controller/user");
const router = express.Router();
const authMiddleware = require("./../middleware/auth");
const isAdminMiddleware = require("./../middleware/isAdmin");

router
  .route("/ban/:id")
  .post(authMiddleware, isAdminMiddleware, userController.banUser);
router
  .route("/role")
  .put(authMiddleware, isAdminMiddleware, userController.changeRole);

module.exports = router;
