const mongoose = require("mongoose");
const { movieSchema } = require("./movie");

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    min: 1,
    max: 5,
    require: true,
  },
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "movie",
  },
});

const commentsModel = mongoose.model("comments", commentSchema);

module.exports = commentsModel;
