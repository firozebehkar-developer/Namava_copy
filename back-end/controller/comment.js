const commentModel = require("./../models/comment");
const movieModel = require("./../models/movie");
const mongoose = require("mongoose");

exports.create = async (req, res) => {
  const { body, hrefMovie, score } = req.body;

  const movie = await movieModel.findOne({ href: hrefMovie }).lean();

  const createComment = await commentModel.create({
    body,
    movie: movie._id,
    score,
    author: req.user._id,
    isAnswer: 0,
    isAccept: 0,
  });

  if (!createComment) {
    return res.status(500).json({
      message: "Server Error",
    });
  }

  const userComments = await commentModel
    .findById(createComment._id)
    .populate("author", "username");

  return res.status(201).json(userComments);
};

exports.remove = async (req, res) => {
  const id = req.params.id;

  const validId = mongoose.Types.ObjectId.isValid(id);
  if (!validId) {
    return res.status(409).json({
      message: "ObjectId not valid",
    });
  }

  const remove = await commentModel.findByIdAndDelete({ _id: id });
  if (!remove) {
    return res.status(409).json({
      message: "comment not found",
    });
  }
  return res.json(remove);
};
