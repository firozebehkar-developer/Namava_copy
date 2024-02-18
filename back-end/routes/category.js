const express = require("express");
const categoryController = require("./../controller/category");
const authMiddleware = require("./../middleware/auth");
const isAdminMiddleware = require("./../middleware/isAdmin");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getAll)
  .post(authMiddleware, isAdminMiddleware, categoryController.create);

router
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, categoryController.remove)
  .put(authMiddleware, isAdminMiddleware, categoryController.update);

module.exports = router;
