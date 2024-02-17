const movieModel = require("./../models/movie");
const commentModel = require("./../models/comment");

exports.createMovie = async (req, res) => {
  const {
    title,
    description,
    director,
    actors,
    genres,
    releaseYear,
    screeningStatus,
    Translation,
    ageLimit,
  } = req.body;
  const createMovie = await movieModel.create({
    title,
    description,
    director,
    actors,
    genres,
    releaseYear,
    screeningStatus,
    Translation,
    ageLimit,
  });
  if (createMovie) {
    return res.status(201).json({
      message: "Created Movie Successfully",
    });
  }
  return res.status(500).json({
    message: "Server Error",
  });
};

exports.addComment = async (req, res) => {
  const { body, movie } = req.body;
  const createComment = await commentModel.create({
    body,
    movie,
  });

  if (!createComment) {
    returnres.status(500).json({
      message: "Server Error",
    });
  }

  return res.status(201).json({ message: "Set Comment Successfully" });
};

exports.getOne = async (req, res) => {
  const { title } = req.params;

  const movie = await movieModel
    .findOne({ title })
    .select("-__v -createdAt -updatedAt")
    .lean();

  const comment = await commentModel
    .find({ movie: movie._id })
    .select("-__v")
    .lean();

  return res.json({ movie, comment });
};
