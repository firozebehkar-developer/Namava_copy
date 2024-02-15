const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: [String],
    genres: [String],
    releaseYear: {
      type: Number,
      required: true,
    },
    screeningStatus: {
      type: String,
      default: "released",
    },
    Translation: {
      type: String,
      default: "OriginalLanguage",
    },
    ageLimit: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

const movieModel = mongoose.model("movie", Schema);

module.exports = movieModel;
