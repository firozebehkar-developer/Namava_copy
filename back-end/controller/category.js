const categoryModel = require("./../models/category");
const { isValidObjectId } = require("mongoose");

exports.getAll = async (req, res) => {
  const category = await categoryModel.find({}).lean();
  return res.json({ category });
};

exports.create = async (req, res) => {
  const { title, href } = req.body;
  const createCategory = await categoryModel.create({ title, href });

  if (!createCategory) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
  return res.status(201).json({
    message: "Category created successfylly",
  });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const isValidId = isValidObjectId(id);

  if (!isValidId) {
    return res.status(404).json({
      message: "The ObjectId Not valid",
    });
  }

  const { title, href } = req.body;
  const updateCategory = await categoryModel.findOneAndUpdate(
    { _id: id },
    {
      title,
      href,
    },
    { new: true }
  );

  if (!updateCategory) {
    return res.status(500).json({
      message: "Server Error",
    });
  }

  return res.json({ updateCategory });
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const isValidId = isValidObjectId(id);

  if (!isValidId) {
    return res.status(404).json({
      message: "The ObjectId Not valid",
    });
  }
  const removeCategory = await categoryModel.findByIdAndDelete({
    _id: id,
  });

  if (!removeCategory) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
  return res.json({ message: " Category Removed " });
};
