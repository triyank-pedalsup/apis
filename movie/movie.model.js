const mongoose = require("mongoose");

const movies = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

const movie = mongoose.model("movie", movies);

module.exports = movie;