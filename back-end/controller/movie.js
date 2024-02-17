const movieModel = require("./../models/movie");

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
