const mongoose = require("mongoose");
const { movieSchema } = require("./movie");

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    require: true,
  },
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "movie",
  },
});

const commentsModel = mongoose.model("comments", commentSchema);

module.exports = commentsModel;
