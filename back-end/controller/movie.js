const movieModel = require("./../models/movie");
const commentModel = require("./../models/comment");

exports.createMovie = async (req, res) => {
  const {
    name,
    description,
    href,
    categoryId,
    time,
    director,
    actors,
    releaseYear,
    publicationStatus,
    translation,
    ageLimit,
    preview,
  } = req.body;
  const createMovie = await movieModel.create({
    name,
    description,
    cover: req.file.filename,
    href,
    categoryId,
    time,
    director,
    actors,
    releaseYear,
    publicationStatus,
    translation,
    ageLimit,
    preview,
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
  const { body, movie, score } = req.body;
  const createComment = await commentModel.create({
    body,
    movie,
    score,
    author: req.user._id,
  });

  if (!createComment) {
    return res.status(500).json({
      message: "Server Error",
    });
  }

  const userComments = await commentModel
    .findById(createComment._id)
    .populate("author", "-password");

  return res.status(201).json(userComments);
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
