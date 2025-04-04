const Movie = require("./movie.model.js");

exports.createMovie = async (title, duration, price) => {
  const movie = new Movie({ title, duration, price });
  const savedMovie = await movie.save();
  return savedMovie;
};

exports.getAllMovie = async () => {
  const movie = await Movie.find();
  return movie;
};

exports.deleteMovie = async (id) => {
  const movie = await Movie.findByIdAndDelete(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
};

exports.updateMovie = async (id, data) => {
  const movie = await Movie.findByIdAndUpdate(id, data, { new: true });
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
};
